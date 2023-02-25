require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyparser=require('body-parser');

const connect = require("./config/db");
const InfoModel = require("./model/userinfo.model");
const PORT = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());

mongoose.set("strictQuery", false);



app.get("/", (req, res) => {
	res.send("hello world!");
});

app.get("/info", async(req, res) => {
	try{
		const data = await InfoModel.find({}).limit(10)
		res.send(data);
	}catch(err){
		res.send("err",err)
	}
});

app.listen(PORT, async () => {
	connect()
	console.log(`Listening at http://localhost:${PORT}`);
});