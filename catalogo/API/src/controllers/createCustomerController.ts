import { FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerService } from "../services/createCustomerService";


class CreateCustomerController {
    async handle(request: FastifyRequest, reply: FastifyReply){

    const {nome, email } = request.body as { nome: string, email: string};

    const customerService = new CreateCustomerService();
    const customer = await customerService.execute({ nome, email });

    reply.send(customer);

    }
}

export { CreateCustomerController };