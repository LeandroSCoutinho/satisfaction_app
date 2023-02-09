import prismaClient from "../../prisma";

interface GradeRequest{
    nota: string
}

class CreateGradeService{
    async execute({nota}:GradeRequest){
        if(!nota){
            throw new Error('Favor informar uma nota!');
        }

        const assessment = await prismaClient.nota.create({
            data:{
                nota: nota
            }
        })
        return assessment;
    }
}

export  { CreateGradeService};