import { Request, Response } from "express";
import { CreateGradeService } from "../../services/grade/CreateGradeService";

class CreateGradeController{
   async handle(req: Request, res: Response){
    const { grade } = req.body;

    const createGradeService = new CreateGradeService();

    const assessment = await createGradeService.execute({grade});

    return res.json(assessment)
   }
}

export {CreateGradeController};