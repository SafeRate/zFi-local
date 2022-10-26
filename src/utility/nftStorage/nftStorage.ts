import { CompileResponse } from "algosdk/dist/types/src/client/v2/algod/models/types";
import { NFTStorage, File } from "nft.storage";
import { env } from "../env";
import { TreasurySecurity } from "../treasury/treasury";

export const uploadTreasuryMetadataToNFTStorage = async (
  treasurySecurity: TreasurySecurity
): Promise<string | null> => {
  let result: string | null = null;

  const client = new NFTStorage({ token: env.NFT_STORAGE_KEY });

  const treasuryMetadata = {
    title: treasurySecurity.cusip,
    type: "object",
    properties: {
      decimals: 0,
      images:
        "https://en.wikipedia.org/wiki/United_States_Department_of_the_Treasury#/media/File:Seal_of_the_United_States_Department_of_the_Treasury.svg",
      properties: {
        ...treasurySecurity,
      },
    },
  };

  const blob = new Blob([JSON.stringify(treasuryMetadata)], {
    type: "application/json",
  });

  try {
    const cid = await client.storeBlob(blob);
    result = cid;
  } catch (error) {
    console.log(`Unable to upload ${treasurySecurity.cusip} to nft.storage`);
    console.log(error);
    throw error;
  }

  return result;
};
