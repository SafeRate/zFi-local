import { api, data, schedule, params } from "@serverless/cloud";
import {
  getTreasuryPrices,
  getTreasuryPricesHistorical,
  getTreasurySecurityMetadata,
} from "./src/utility/treasury/treasuryData";

const runScript = async () => {
  // const result = await getTreasuryPrices();
  // const result = await getTreasuryPricesHistorical(2022, 10, 14);
  console.log("get treasury security metadata");
  const result = await getTreasurySecurityMetadata();
  console.log("complete");
  console.log(result);
  // console.log(result);
};

// Create GET route and return users
// api.get("/users", async (req, res) => {
//   // Get users from Serverless Data
//   let result = await data.get("user:*", true);
//   // Return the results
//   res.send({
//     users: result.items,
//   });
// });

// // Redirect to users endpoint
// api.get("/*", (req, res) => {
//   res.redirect("/users");
// });

runScript();
