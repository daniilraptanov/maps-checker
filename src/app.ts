import express from "express";
import config from "../config";

const app = express();

app.use(express.json());

app.listen(config.PORT, () => {
  try {
    return console.log(`server is listening on ${config.PORT}`);
  } catch {
    return console.error(`server error (on ${config.PORT})`);
  }
});

