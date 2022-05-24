import express from "express";
import config from "../config";
import API from "./routes/api-v1.routes";

const app = express();

const api_v1 = new API().registerEndpoints()

app.use(express.json());
app.use("/api/v1", api_v1);


app.listen(config.PORT, () => {
    try {
        return console.log(`server is listening on ${config.PORT}`);
    } catch {
        return console.error(`server error (on ${config.PORT})`);
    }
});
