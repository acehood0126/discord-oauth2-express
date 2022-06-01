import "./lib/env";
import express from "express";
import cors from "cors";

import discordApi from "./api/discord.api";

const app = express();
app.use(cors());
app.use(express.json());

// const db = require("./models");
// db.mongoose
//   .connect(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database!");
//   })
//   .catch((err: any) => {
//     console.log("Cannot connect to the database!", err);
//     process.exit();
//   });

app.use("/api/discord", discordApi);

export default app;
