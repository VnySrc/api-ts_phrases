import {Request, Response} from "express"

export const ping = (req: Request, res: Response) => {
    res.json({Pong: true})
}

export const getName = (req: Request, res: Response) => {
    const result: string = req.params.name
    res.json({nome: result})
}

export const getNumber = (req: Request, res: Response) => {
    let rNumber: number = Math.floor(Math.random() * 10)
    res.json({Numero:rNumber})
}