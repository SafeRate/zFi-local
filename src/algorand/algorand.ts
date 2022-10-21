import algosdk, { mnemonicToSecretKey } from "algosdk";
import MyAlgoConnect, { Accounts } from "@randlabs/myalgo-connect";
import IndexerClient from "algosdk/dist/types/src/client/v2/indexer/indexer";

export type AlgorandAccount = {
  address: string;
  mnenomic: string;
};

export const getTreasuryAccount = (): AlgorandAccount => {
  return {
    address: "NIOZNHERQBVYVT5OCYHT4VAJI4OOROXSEQUUQR6YPHZMWHMCPNSAK4GKBE",
    mnenomic:
      "mechanic assume account hand hill lucky trip position total symbol next wrap subway scatter glass mechanic sound vacuum vintage pen abuse foster pizza ability friend",
  };
};

export const getTestUserAccount = (): AlgorandAccount => {
  return {
    address: "VJSOWZXI3NOLZCGRN5Q4ZDGRCCIXYZKNB22BN7X4DW5WPGMKOXIGWHKJBA",
    mnenomic:
      "oven gesture together once junk salad giant atom flavor blanket whisper boss broken unfold remember shell check brain list head aisle deliver symbol above employ",
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
      `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
      `http://localhost`,
      4001
    );
    const indexerClient: IndexerClient = new algosdk.Indexer(
      `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
      `http://localhost`,
      8980
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
}: {
  assetName: string;
  decimals: number;
  total: number;
  unitName: string;
}) => {
  const { algodClient } = await getAlgorandNetworkConnection();
  const params = await algodClient.getTransactionParams().do();
  const treasuryAccount = getTreasuryAccount().address;
  const defaultFrozen = false;
  const from = treasuryAccount;
  const managerAddr = treasuryAccount;
  const reserveAddr = treasuryAccount;
  const freezeAddr = treasuryAccount;
  const clawbackAddr = treasuryAccount;
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
    suggestedParams: params,
  });

  const rawSignedTxn = txn.signTxn(mnemonicToSecretKey(treasuryAccount).sk);
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
  const tokens = [
    { unitName: "WT221120", assetName: "WEFI Treasury 2022-11-20" },
    { unitName: "WT230119", assetName: "WEFI Treasury 2023-01-19" },
    { unitName: "WT230419", assetName: "WEFI Treasury 2023-04-19" },
    { unitName: "WT231020", assetName: "WEFI Treasury 2023-10-20" },
    { unitName: "WSRM0001", assetName: "WEFI SRM Series 1" },
  ];

  for await (const [i, { assetName, unitName }] of tokens.entries()) {
    await createSecurityToken({
      assetName,
      decimals: 2,
      total: 100000,
      unitName,
    });
  }
};
