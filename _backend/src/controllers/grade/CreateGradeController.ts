import { Request, Response } from "express";
import { CreateGradeService } from "../../services/grade/CreateGradeService";

class CreateGradeController{
   async handle(req: Request, res: Response){
    const { nota } = req.body;

    const createGradeService = new CreateGradeService();

    const assessment = await createGradeService.execute({nota});

    return res.json(assessment)
   }
}

export {CreateGradeController};