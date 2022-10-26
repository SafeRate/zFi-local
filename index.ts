import { api, data, schedule, params } from "@serverless/cloud";
import { createSecurityTokens, createWEFIUSD } from "./src/algorand/algorand";
import {
  getTreasuryPrices,
  getTreasuryPricesHistorical,
  getTreasurySecurityMetadata,
} from "./src/utility/treasury/treasuryData";
import { loadEnv } from "./src/utility/env";

loadEnv(false);

const runScript = async () => {
  console.log("beginning script");
  console.log("creating treasury security tokens");
  // await createWEFIUSD();
  const securityTokens = await createSecurityTokens();
  console.log("ending script");
};

runScript();
