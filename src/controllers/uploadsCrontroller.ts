import {Request, Response} from "express"
import sharp from "sharp"
import {unlink} from "fs/promises"

export const uploadFile = async (req: Request, res: Response) => {

    if (req.file) {
    const filename = req.file.filename +"."+ req.file.mimetype.split("/")[1]

    await sharp(req.file.path)
    .resize(350, 350, {fit: sharp.fit.fill})
    .toFormat("png")
    .toFile(`./public/media/${filename}`)

    res.json({image: filename}) //split separa as frases de acordo com o elemento selecionado
    
    unlink(req.file.path)
    }

    else{
    res.status(400)
    res.json({error: "Arquivo invalido"})
    }
}