const express = require("express");
const router = express.Router()

const uploads = require("../config/multer")

const PictureController = require("../controllers/pictureController")

router.post("/" , uploads.single("file"), PictureController.create)

module.exports = router;