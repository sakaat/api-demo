import express = require("express");
const router = express.Router();

import v1 = require("./v1");
router.use("/v1", v1);

export = router;
