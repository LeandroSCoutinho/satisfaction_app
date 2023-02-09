import { Router } from "express";
import { CreateGradeController } from "./controllers/grade/CreateGradeController";

const router = Router();

router.post('/nota', new CreateGradeController().handle);


export {router};