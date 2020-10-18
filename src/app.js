const express = require("express")
const app = express()
const router = require("./routes/musicRouter")

app.use("/", router)

module.exports = app