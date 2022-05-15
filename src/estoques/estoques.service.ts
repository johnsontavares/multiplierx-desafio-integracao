import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { IntegerDataType } from 'sequelize/types';
import { estoque } from './estoques.entity';
import { produto } from '../produtos/produtos.entity'
import { Produto } from '../produtos/produtos.interface';
import { InjectConnection } from '@nestjs/sequelize';

@Injectable()
export class EstoquesService {
    constructor(
        // @InjectConnection('albumsConnection')
        @Inject('ESTOQUE_REPOSITORY')
        private estoqueRepository: typeof estoque
    ) { }

    getCategoria() {
        return "Hi service"
    }

    async saveEstoquedb(produto: Produto) {
        return this.estoqueRepository.create(
            {
                idProduto: (produto.id),
                idCategoria: 1,
                quantidade: 0,
                reserva: 0,
                status: produto.status
            })
    }

    async findAll(): Promise<estoque[]> {
        return this.estoqueRepository.findAll<estoque>();
    }


    async getEstoqueById(id: number) {
        const categoria = this.estoqueRepository.findOne({
            where: {
                id: id
            }
        });

        return categoria
    }

    async update(id: number, NovoEstoque: any) {
        await this.estoqueRepository.update(NovoEstoque, {
            where: {
                id: id
            }
        })
        const categoria = this.estoqueRepository.findOne({
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

        const categoria = this.estoqueRepository.findOne({
            where: {
                id: id
            }
        });

        await this.estoqueRepository.destroy({
            where: {
                id: id
            }
        })


        return categoria
    }

}
