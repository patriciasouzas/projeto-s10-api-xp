const express = require ("express")
const router = express.Router()
const controller = require("../controller/musicController")

router.get("/musicas", controller.getMusicas)

module.exports = router