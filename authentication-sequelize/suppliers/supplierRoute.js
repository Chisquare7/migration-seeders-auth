const express = require("express")
const middleware = require("./supplierMiddleware")
const controller = require("./supplierController")

const supplierRouter = express.Router()

supplierRouter.post("/addSupplier", middleware.validateItemSupplier, controller.createItemSupplier)

module.exports = supplierRouter;