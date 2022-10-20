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
