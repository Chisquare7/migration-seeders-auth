const express = require("express");
const controller = require("./supplierController");

const supplierRouter = express.Router();

supplierRouter.post("/genSup", controller.createSupplier);

module.exports = supplierRouter;