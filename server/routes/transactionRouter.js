const express = require("express");
const router = express.Router();
const { check } = require("express-validator");

const authVerify = require("../middlewares/authVerify");
const buy = require("../controllers/transactionController/buy");
const buyLimit = require("../controllers/transactionController/buyLimit");
const exchange = require("../controllers/transactionController/exchange");
const sell = require("../controllers/transactionController/sell");
const sellLimit = require("../controllers/transactionController/sellLimit");

router.use(authVerify);

router.post("/buy", buy);
router.post("/sell/:id", sell);
router.post("/buyLimit", buyLimit);
router.post("/sellLimit", sellLimit);
router.post("/exchange", exchange);

module.exports = router;
