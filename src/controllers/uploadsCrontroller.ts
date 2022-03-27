import {Request, Response} from "express"

export const uploadFile = (req: Request, res: Response) => {
    if (req.file) {
    const perfil = req.file;
    console.log(perfil)

    res.json({})
    }
    else{
    res.status(400)
    res.json({})
    }
}