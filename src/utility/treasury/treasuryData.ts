import {
  getTreasuryFromPricesFormat,
  getTreasurySecurityFromTreasurySecurityRaw,
  TreasuryPrice,
  TreasurySecurity,
  TreasurySecurityRaw,
} from "./treasury";
import axios from "axios";
import FormData from "form-data";
import * as fs from "fs";
import * as stream from "stream";
import { promisify } from "util";
import { env } from "../env";
import { v4 as uuidv4 } from "uuid";
import * as http from "http";
import * as https from "https";
import { storage } from "@serverless/cloud";

const TREASURY_DAILY_PRICES_URL: string =
  "https://www.treasurydirect.gov/GA-FI/FedInvest/todaySecurityPriceDetail";

const TREASURY_HISTORICAL_PRICES_URL: string =
  "https://www.treasurydirect.gov/GA-FI/FedInvest/securityPriceDetail";

const TREASURY_SECURITIES_METADATA_URL: string =
  "https://www.treasurydirect.gov/TA_WS/securities/announced";

export const getTreasuryPrices = async function () {
  const formData = new FormData();
  formData.append("fileType", "csv");
  formData.append("csv", "CSV+FORMAT");

  let res = await axios.post(TREASURY_DAILY_PRICES_URL, formData, {
    headers: formData.getHeaders(),
  });

  let data = res.data;
  let treasurySecurities: TreasuryPrice[] = [];

  if (data && typeof data === "string") {
    const rows = data.split(/\r?\n/);
    if (Array.isArray(rows) && rows.length) {
      for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const values = row.split(",");
        if (Array.isArray(values) && values.length) {
          const treasury = getTreasuryFromPricesFormat(values);
          if (treasury.cusip) {
            treasurySecurities.push(treasury);
          }
        }
      }
    }
  }

  return treasurySecurities;
};

const getTreasuryDataFromStream = async (): Promise<any> => {
  const finishedDownload = promisify(stream.finished);
  const filePath = `${env.STORAGE_TEMP_ROOT}/${uuidv4()}`;
  const writer = fs.createWriteStream(filePath);

  const response = await axios({
    url: TREASURY_SECURITIES_METADATA_URL,
    httpAgent: new http.Agent({ keepAlive: true }),
    httpsAgent: new https.Agent({ keepAlive: true }),
    method: "GET",
    params: {
      format: "json",
    },
    responseType: "stream",
    validateStatus: null,
  });

  console.log("b");
  console.log("b1");

  response.data.pipe(writer);

  console.log("c");

  await finishedDownload(writer);
  const result = await fs.readFileSync(filePath);

  console.log(result);
  console.log("hilo");

  return result;
};

export const getTreasuryDataFromFile = async () => {
  let securities: TreasurySecurityRaw[] = [];

  const securitiesBuffer = fs.readFileSync(
    "/home/dmhall2/coding/zfi-local/local/treasurySecurities.json"
  );

  if (securitiesBuffer) {
    const rawSecurities = JSON.parse(securitiesBuffer.toString());
    if (Array.isArray(rawSecurities)) {
      securities = rawSecurities;
    }
  }

  return securities;
};

export const getTreasurySecurityMetadata = async (): Promise<
  TreasurySecurity[]
> => {
  const securities: TreasurySecurity[] = [];

  try {
    const securitiesRaw: TreasurySecurityRaw[] =
      await getTreasuryDataFromFile();

    if (Array.isArray(securitiesRaw)) {
      for (let sr = 0; sr < securitiesRaw.length; sr++) {
        const security: TreasurySecurity =
          getTreasurySecurityFromTreasurySecurityRaw(securitiesRaw[sr]);
        securities.push(security);
      }
    } else {
      throw new Error("There was no treasury securities data!");
    }
  } catch (error) {
    throw new Error("uanble to load securities file!");
  }

  return securities;
};

export const getTreasuryPricesHistorical = async function (
  year: number,
  month: number,
  day: number
) {
  const formData = new FormData();
  formData.append("fileType", "csv");
  formData.append("csv", "CSV+FORMAT");
  formData.append("priceDateDay", `${day}`);
  formData.append("priceDateMonth", `${month}`);
  formData.append("priceDateYear", `${year}`);

  let res = await axios.post(TREASURY_HISTORICAL_PRICES_URL, formData, {
    headers: formData.getHeaders(),
  });

  let data = res.data;
  let treasurySecurities: TreasuryPrice[] = [];

  if (data && typeof data === "string") {
    const rows = data.split(/\r?\n/);
    if (Array.isArray(rows) && rows.length) {
      for (let r = 0; r < rows.length; r++) {
        const row = rows[r];
        const values = row.split(",");
        if (Array.isArray(values) && values.length) {
          const treasury = getTreasuryFromPricesFormat(values);
          if (treasury.cusip) {
            treasurySecurities.push(treasury);
          }
        }
      }
    }
  }

  return treasurySecurities;
};
