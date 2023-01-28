import { Router, Request, Response } from "express";

const router = Router();

router.get('/nota',(req: Request, res: Response) => {
    throw new Error("Houve algum problema com a aplicação, favor entrar em contato com o administrador do sistema!");
    
    return res.json({ok: true})
});

export {router};