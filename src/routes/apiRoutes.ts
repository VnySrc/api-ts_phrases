import {Router} from "express"
import multer from "multer"

import * as apiController  from "../controllers/apiController"
import * as pharsesController from "../controllers/phrasesController"
import * as uploadsCrontroller from "../controllers/uploadsCrontroller"

const router = Router()

//multer

//regras de armazenamento
const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.fieldname + Date.now() + ".png")
    },

    destination: (req, file, cb) => {
        cb(null, "./temp")
    }
})

//regras de recebimento
const upload = multer({
    storage, // usar regras de armazenamento
    dest: "./temp",
    limits: {fieldSize: 2000000},

    fileFilter: (req, file, cb) => {
        const allowed: string[] = ["image/jpg", "image/jpeg", "image/png"]

        if (allowed.includes(file.mimetype))
        {cb(null, true)}
        else {cb(null, false)}
    },
})




router.get("/name/:name" , apiController.getName)
router.get("/number", apiController.getNumber)
router.get("/ping" , apiController.ping)

// phrases routes

router.get("/phrases" , pharsesController.findAllPhrases)
router.get("/phrases/:id" , pharsesController.findPhraseById)
router.post("/phrases/newfrase" , pharsesController.createNewPhrase)
router.put("/phrases/edit/:id" , pharsesController.editPhrase)
router.delete("/phrases/delete/:id" , pharsesController.deletePhrase)

// upload

router.post("/upload",upload.single("perfil"),uploadsCrontroller.uploadFile)


export default router;
