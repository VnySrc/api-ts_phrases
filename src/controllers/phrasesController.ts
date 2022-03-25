import {Request, Response} from "express"
import { Pharse } from "../models/Pharse"

export const findAllPhrases = async (req: Request, res: Response) => {
    const result = await Pharse.findAll()

    res.json({result})
}

export const createNewPhrase = async (req: Request, res: Response) => {
    const {author , content} = req.body;
    
    try {
        
    const result = Pharse.build({
        author,
        content,
    })

    await result.save()
    res.json({Status:"Created"})
    }
    catch (err){res.json({Status:`Error, process requirements not met`})}
}

export const findPhraseById = async (req: Request, res: Response) => {
    const id = req.params.id;

    const result = await Pharse.findByPk(id)

    res.json({result})
    

}

export const editPhrase = async (req: Request, res: Response) => {
    const id = req.params.id;
    const {author, content} = req.body;

    const result = await Pharse.findByPk(id)
    if (result) {
    result.author = author
    result.content = content
    res.json({Status:`Id: ${id} Edited`})
    }
    else{res.json({Status:`Error, process requirements not met`})}
}


export const deletePhrase = async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await Pharse.findOne({where:{id:id}})
    
    if (result) {
        
        result.destroy()
        res.json({})
    }
    else{res.json({Status:`Error, process requirements not met`})}
}
