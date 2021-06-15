import { Repository, EntityRepository } from "typeorm"
import { Produtos } from "../entities/Produtos";

@EntityRepository(Produtos)
class ProdutosRepository extends Repository<Produtos>{

}

export { ProdutosRepository }