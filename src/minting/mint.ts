import { NFTStorage, File } from "nft.storage";
import { env } from "../utility/env";
import { TreasurySecurity } from "../utility/treasury/treasury";


export const publishToNFTStorage = (security: TreasurySecurity) => {
  const nftStorageKey = env.NFT_STORAGE_KEY;
  const NFTclient = new NFTStorage({ token: nftStorageKey });
};
