//handles initial get request for hte homepage
//handels POST method request for ading a new item

const express = require("express");
const router = express.Router();
const homeController = require("../controllers/home");

router.get("/", homeController.getIndex); //read
router.post("/new", homeController.createItem); //create

module.exports = router;
