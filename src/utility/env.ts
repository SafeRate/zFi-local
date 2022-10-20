import { params } from "@serverless/cloud";

type Env = {
  NFT_STORAGE_KEY: string;
  STORAGE_TEMP_ROOT: string;
};

export const env: Env = {
  ...(params as Env),
};
