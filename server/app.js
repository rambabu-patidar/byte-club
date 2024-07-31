require("dotenv").config();

// Global module imports

// packages imports
const express = require("express");

// env variables imports
const PORT = process.env.PORT || 8080;

const app = express();

app.use("/", (req, res, next) => {
	res.send("Hello World");
});

app.listen(PORT, () => {
	console.log(`Started listening on ${PORT}.`);
});
