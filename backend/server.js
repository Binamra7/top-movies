/** @format */

const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

//use CORS middleware
app.use(cors());
//use dotenv
dotenv.config();

app.use(express.json());

const port = process.env.PORT || 5000;

//connect to mongoose
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));



const movieRouter = require("./routes/movies");
const movieRankRouter = require("./routes/movieRank");
app.use("/api/movies", movieRankRouter);
// app.use("/api/movies", movieRankRouter);


app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
