import prismaClient from "../prisma";

interface CreateCustomerProps{
    nome: string;
    email: string;
}

class CreateCustomerService {
    async execute({nome, email}: CreateCustomerProps){

        if (!nome || !email) {
            throw new Error ("Preencha todos os campos")
        }

        const customer = await prismaClient.customer.create({
            data: {
                nome,
                email,
                status: true
            }
        })

        return customer
    }
}

export { CreateCustomerService };
