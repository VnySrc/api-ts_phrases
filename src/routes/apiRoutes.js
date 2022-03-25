"use strict";
exports.__esModule = true;
var express_1 = require("express");
var apiController = require("../controllers/apiController");
var pharsesController = require("../controllers/phrasesController");
var router = (0, express_1.Router)();
router.get("/name/:name", apiController.getName);
router.get("/number", apiController.getNumber);
router.get("/ping", apiController.ping);
// phrases routes
router.get("/phrases", pharsesController.findAllPhrases);
router.get("/phrases/:id", pharsesController.findPhraseById);
router.post("/phrases/newfrase", pharsesController.createNewPhrase);
router.put("/phrases/edit/:id", pharsesController.editPhrase);
router["delete"]("/phrases/delete/:id", pharsesController.deletePhrase);
exports["default"] = router;
