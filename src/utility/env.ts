import * as dotenv from "dotenv";
dotenv.config();

type Env = {
  ALGOD_CONNECTION: string;
  ALGOD_PORT: number;
  ALGOD_SIGNATURE: string;
  INDEXER_CONNECTION: string;
  INDEXER_PORT: number;
  INDEXER_SIGNATURE: string;
  NFT_STORAGE_KEY: string;
  STORAGE_TEMP_ROOT: string;
  TREASURY_ADDRESS: string;
  TREASURY_MNEMONIC: string;
  USER_ADDRESS: string;
  USER_MNEMONIC: string;
};

export const env: Env = {
  ALGOD_CONNECTION: process.env.ALGOD_CONNECTION
    ? process.env.ALGOD_CONNECTION
    : "",
  ALGOD_PORT: process.env.ALGOD_PORT ? parseInt(process.env.ALGOD_PORT) : 443,
  ALGOD_SIGNATURE: process.env.ALGOD_SIGNATURE
    ? process.env.ALGOD_SIGNATURE
    : "",
  INDEXER_CONNECTION: process.env.INDEXER_CONNECTION
    ? process.env.INDEXER_CONNECTION
    : "",
  INDEXER_PORT: process.env.INDEXER_PORT
    ? parseInt(process.env.INDEXER_PORT)
    : 443,
  INDEXER_SIGNATURE: process.env.INDEXER_SIGNATURE
    ? process.env.INDEXER_SIGNATURE
    : "",
  NFT_STORAGE_KEY: process.env.NFT_STORAGE_KEY
    ? process.env.NFT_STORAGE_KEY
    : "",
  STORAGE_TEMP_ROOT: process.env.STORAGE_TEMP_ROOT
    ? process.env.STORAGE_TEMP_ROOT
    : "",
  TREASURY_ADDRESS: process.env.TREASURY_ADDRESS
    ? process.env.TREASURY_ADDRESS
    : "",
  TREASURY_MNEMONIC: process.env.TREASURY_MNEMONIC
    ? process.env.TREASURY_MNEMONIC
    : "",
  USER_ADDRESS: process.env.USER_ADDRESS ? process.env.USER_ADDRESS : "",
  USER_MNEMONIC: process.env.USER_MNEMONIC ? process.env.USER_MNEMONIC : "",
};

export const loadEnv = (print: boolean) => {
  console.log("Loading environment variables");
  console.log("...");
  if (env.ALGOD_CONNECTION) {
    console.log("environment variables successfully loaded");
  } else {
    console.log("environment variables unsuccessfully loaded");
  }

  if (print) {
    console.log(env);
  }
};
