import { params } from "@serverless/cloud";

type Env = {
  STORAGE_TEMP_ROOT: string;
};

export const env: Env = {
  ...(params as Env),
};
