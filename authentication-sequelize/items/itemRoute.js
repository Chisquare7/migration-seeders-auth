const express = require("express")
const middleware = require("./itemMiddleware")
const controller = require("./itemController")

const itemRouter = express.Router()

itemRouter.post("/addItems", middleware.validateItem, controller.createItem)

module.exports = itemRouter;