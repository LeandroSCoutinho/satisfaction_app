import prismaClient from "../../prisma";

interface GradeRequest{
    grade: string
}

class CreateGradeService{
    async execute({grade}:GradeRequest){
        if(!grade){
            throw new Error('Favor informar uma nota!');
        }

        const assessment = await prismaClient.nota.create({
            data:{
                nota: grade
            }
        })
        return assessment;
    }
}

export  { CreateGradeService};