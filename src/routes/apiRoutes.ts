import {Router} from "express"

import * as apiController  from "../controllers/apiController"
import * as pharsesController from "../controllers/phrasesController"
const router = Router()

router.get("/name/:name" , apiController.getName)
router.get("/number", apiController.getNumber)
router.get("/ping" , apiController.ping)

// phrases routes

router.get("/phrases" , pharsesController.findAllPhrases)
router.get("/phrases/:id" , pharsesController.findPhraseById)
router.post("/phrases/newfrase" , pharsesController.createNewPhrase)
router.put("/phrases/edit/:id" , pharsesController.editPhrase)
router.delete("/phrases/delete/:id" , pharsesController.deletePhrase)


export default router;
