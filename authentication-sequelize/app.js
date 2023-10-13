const express = require("express");
const sequelize = require("./config/sequelizeConfig");
const userRoute = require("./users/userRoute")
const categoryRoute = require("./categories/categoryRoute");
const supplierRoute = require("./suppliers/supplierRoute");
const itemRoute = require("./items/itemRoute");
const adminRoute = require("./admins/adminRoute");
const {requireAuthenticate} = require("./globalMiddleware/globalMiddleware")
const { requireAdminAuth } = require("./globalMiddleware/globalMiddleware");
const bodyParser = require("body-parser")
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json())

app.use("/users", userRoute)
app.use("/admins", adminRoute);
app.use("/categories", categoryRoute);
app.use("/suppliers", supplierRoute);
app.use("/items", itemRoute);



sequelize
	.authenticate()
	.then(() => {
		console.log("Successfully connected to the database");
	})
	.catch((error) => {
		console.log("Failed database connection", error);
	});

app.listen(PORT, () => {
	console.log(`server started running at: http://localhost:${PORT}`);
});
