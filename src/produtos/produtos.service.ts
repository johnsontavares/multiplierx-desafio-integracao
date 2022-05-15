import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { produto } from './produtos.entity';
import { estoque } from '../estoques/estoques.entity';


@Injectable()
export class ProdutosService {
    constructor(
        @Inject('PRODUTOS_REPOSITORY')
        // @Inject('ESTOQUE_REPOSITORY')
        private produtoRepository: typeof produto,
        // private estoqueRepository: typeof estoque
    ) { }

    getCategoria() {
        return "Hi service"
    }

    async findAll(): Promise<produto[]> {
        return this.produtoRepository.findAll<produto>();
    }

    async saveProduto(produto: any): Promise<produto> {
        // this.estoqueRepository.create(produto.id)
        return this.produtoRepository.create(produto)
    }

    async getProdutoById(id: number) {
        const produto = this.produtoRepository.findOne({
            where: {
                id: id
            }
        });

        return produto

    }

    async update(id: number, NovaCategoria: any) {
        await this.produtoRepository.update(NovaCategoria, {
            where: {
                id: id
            }
        })
        const categoria = this.produtoRepository.findOne({
            where: {
                id: id
            }
        });

        if (categoria) {
            return categoria
        }

        return "Categoria não encontrada!"

    }

    async destroy(id: number) {

        const produto = this.produtoRepository.findOne({
            where: {
                id: id
            }
        });

        await this.produtoRepository.destroy({
            where: {
                id: id
            }
        })

        return produto
    }

}
