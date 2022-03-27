import {Request, Response} from "express"

export const uploadFile = (req: Request, res: Response) => {
    const perfil = req.file;

    console.log(perfil)
    res.json({})
}