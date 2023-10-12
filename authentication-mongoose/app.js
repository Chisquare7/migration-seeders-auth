const express = require("express");
const {databaseConnect} = require("./config/mongoose")
const userRoute = require("./users/userRoute")
const categoryRoute = require("./itemCategories/categoryRoute");
const supplierRoute = require("./itemSuppliers/supplierRoute");
const itemRoute = require("./items/itemRoute");
const adminRoute = require("./admins/adminRoute");
const bodyParser = require("body-parser")
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

databaseConnect()

app.use(bodyParser.json())

app.use("/users", userRoute)
app.use("/admins", adminRoute);
app.use("/categories", categoryRoute);
app.use("/suppliers", supplierRoute);
app.use("/items", itemRoute);


app.listen(PORT, () => {
	console.log(`server started running at: http://localhost:${PORT}`);
});
