import express from "express";
import config from "../config";
const cors = require("cors");

const app = express();

app.use(express.json());
app.use("/api/v1", require("./routes/api-v1.routes"));

app.use(cors());

const defaultPort = 5000;

app.listen(config.PORT || defaultPort, () => {
    try {
        return console.log(`server is listening on ${config.PORT || defaultPort}`);
    } catch {
        return console.error(`server error (on ${config.PORT || defaultPort})`);
    }
});
