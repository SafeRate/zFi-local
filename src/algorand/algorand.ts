import algosdk, { mnemonicToSecretKey } from "algosdk";
import MyAlgoConnect, { Accounts } from "@randlabs/myalgo-connect";
import IndexerClient from "algosdk/dist/types/src/client/v2/indexer/indexer";
import { env } from "../utility/env";
import { getTreasurySecurityMetadata } from "../utility/treasury/treasuryData";
import { TreasurySecurity } from "../utility/treasury/treasury";
import { uploadTreasuryMetadataToNFTStorage } from "../utility/nftStorage/nftStorage";

export type AlgorandAccount = {
  address: string;
  mnenomic: string;
};

export const getTreasuryAccount = (): AlgorandAccount => {
  return {
    address: env.TREASURY_ADDRESS,
    mnenomic: env.TREASURY_MNEMONIC,
  };
};

export const getTestUserAccount = (): AlgorandAccount => {
  return {
    address: env.USER_ADDRESS,
    mnenomic: env.USER_MNEMONIC,
  };
};

export const getIdForWEFIUSD = () => {
  return 27;
};

export const createWEFIUSD = async (): Promise<any> => {
  const algorandConnection = await getAlgorandNetworkConnection();
  const treasuryAccount = getTreasuryAccount();

  const note = undefined; // arbitrary data to be stored in the transaction; here, none is stored
  const addr = treasuryAccount.address;
  const defaultFrozen = false;
  const decimals = 2;
  const totalIssuance = 100000;
  const unitName = "WEFIUSD";
  const manager = treasuryAccount.address;
  const reserve = treasuryAccount.address;
  const freeze = treasuryAccount.address;
  const clawback = treasuryAccount.address;

  // signing and sending "txn" allows "addr" to create an asset
  const txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
    addr,
    note,
    totalIssuance,
    decimals,
    defaultFrozen,
    manager,
    reserve,
    freeze,
    clawback,
    unitName,
    undefined,
    undefined,
    undefined,
    algorandConnection.algodParams
  );

  const rawSignedTxn = txn.signTxn(
    mnemonicToSecretKey(treasuryAccount.mnenomic).sk
  );
  const tx = await algorandConnection.algodClient
    .sendRawTransaction(rawSignedTxn)
    .do();

  let assetID = null;
  const ptx = await algosdk.waitForConfirmation(
    algorandConnection.algodClient,
    tx.txId,
    4
  );
  assetID = ptx["asset-index"];
  console.log(
    "Transaction " + tx.txId + " confirmed in round " + ptx["confirmed-round"]
  );

  console.log(`Assset ${unitName} is created. Asset ID ${assetID}`);
};

export const getWEFIUSD = (): string => {
  return "";
};

export const getMyAlgoUserAccount = async (): Promise<Accounts | null> => {
  const myAlgoConnect = new MyAlgoConnect();
  const accounts: Accounts[] = await myAlgoConnect.connect({
    shouldSelectOneAccount: true,
  });

  if (Array.isArray(accounts) && accounts.length > 0) {
    console.log(accounts);
    return accounts[0];
  } else {
    return null;
  }
};

export const getMyAlgoUserAccounts = async (): Promise<Accounts[] | null> => {
  const myAlgoConnect = new MyAlgoConnect();
  const accounts = await myAlgoConnect.connect({
    shouldSelectOneAccount: false,
  });
  if (Array.isArray(accounts) && accounts.length > 0) {
    return accounts;
  } else {
    return [];
  }
};

export type MyAlgoNetworkConnection = {
  algodClient: algosdk.Algodv2;
  algodParams: algosdk.SuggestedParams;
  indexerClient: IndexerClient;
};

export const getAlgorandNetworkConnection =
  async (): Promise<MyAlgoNetworkConnection> => {
    const algodClient: algosdk.Algodv2 = new algosdk.Algodv2(
      env.ALGOD_SIGNATURE,
      env.ALGOD_CONNECTION,
      env.ALGOD_PORT
    );
    const indexerClient: IndexerClient = new algosdk.Indexer(
      env.INDEXER_SIGNATURE,
      env.INDEXER_CONNECTION,
      env.INDEXER_PORT
    );

    const algodParams: algosdk.SuggestedParams = await algodClient
      .getTransactionParams()
      .do();

    return {
      algodClient,
      algodParams,
      indexerClient,
    };
  };

export const createSecurityToken = async ({
  assetName,
  decimals,
  total,
  unitName,
  treasurySecurity,
}: {
  assetName: string;
  decimals: number;
  total: number;
  unitName: string;
  treasurySecurity: TreasurySecurity;
}) => {
  const { algodClient } = await getAlgorandNetworkConnection();
  const params = await algodClient.getTransactionParams().do();
  const treasury = getTreasuryAccount();
  const treasuryAccount = treasury.address;
  const defaultFrozen = false;
  const from = treasuryAccount;
  const managerAddr = treasuryAccount;
  const reserveAddr = treasuryAccount;
  const freezeAddr = treasuryAccount;
  const clawbackAddr = treasuryAccount;

  const cid = await uploadTreasuryMetadataToNFTStorage(treasurySecurity);
  const metadataUrl = `https://nftstorage.link/ipfs/${cid}`;

  const txn = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({
    from,
    total,
    decimals,
    assetName,
    unitName,
    defaultFrozen,
    freeze: freezeAddr,
    manager: managerAddr,
    clawback: clawbackAddr,
    reserve: reserveAddr,
    assetURL: metadataUrl,
    suggestedParams: params,
  });

  const rawSignedTxn = txn.signTxn(mnemonicToSecretKey(treasury.mnenomic).sk);
  const tx = await algodClient.sendRawTransaction(rawSignedTxn).do();

  let assetID = null;
  const ptx = await algosdk.waitForConfirmation(algodClient, tx.txId, 4);
  assetID = ptx["asset-index"];
  console.log(
    "Transaction " + tx.txId + " confirmed in round " + ptx["confirmed-round"]
  );

  console.log(
    `Unit name: ${unitName} Asset name: ${assetName} Asset ID: ${assetID} created`
  );
};

export const createSecurityTokens = async () => {
  const treasurySecurities = await getTreasurySecurityMetadata();

  const tokens = [
    {
      unitName: "WT221120",
      assetName: "WEFI Treasury 2022-11-20",
      treasurySecurity: treasurySecurities["912796YQ6"],
    },
    {
      unitName: "WT230119",
      assetName: "WEFI Treasury 2023-01-19",
      treasurySecurity: treasurySecurities["912796XS3"],
    },
    {
      unitName: "WT230419",
      assetName: "WEFI Treasury 2023-04-19",
      treasurySecurity: treasurySecurities["912796V48"],
    },
    {
      unitName: "WT231020",
      assetName: "WEFI Treasury 2023-10-20",
      treasurySecurity: treasurySecurities["912796YJ2"],
    },
  ];

  for await (const [
    i,
    { assetName, unitName, treasurySecurity },
  ] of tokens.entries()) {
    await createSecurityToken({
      assetName,
      decimals: 2,
      total: 100000,
      unitName,
      treasurySecurity,
    });
  }
};
