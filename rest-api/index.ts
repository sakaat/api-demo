import express from "express";
const app = express();

app.set("port", process.env.PORT || 3000);

app.get("/", (_req, res) => res.send("Hello World!"));

import api = require("./api");
app.use("/api", api);

app.listen(app.get("port"), () => {
    console.log("Node app is running at localhost:" + app.get("port"));
});
