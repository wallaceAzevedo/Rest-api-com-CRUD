import { Request, Response } from "express";
import {getCustomRepository} from "typeorm";

import {ProdutosRepository} from "../repositories/ProdutosRepository";

class ProdutosController {

    async create(request: Request, response: Response) {
    const { title, price, discription } = request.body;

    const produtosRepository  = getCustomRepository(ProdutosRepository);

    const produtos = produtosRepository.create({
        title,
        price,
        discription
    })

    await produtosRepository.save(produtos);

    return response.json(produtos);
    }
}

export { ProdutosController }