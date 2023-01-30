import { Router } from "express";
import { CreateGradeController } from "./controllers/grade/CreateGradeController";

const router = Router();

router.post('/grade', new CreateGradeController().handle);


export {router};