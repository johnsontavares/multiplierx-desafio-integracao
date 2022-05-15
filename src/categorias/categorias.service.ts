import { Injectable, NotFoundException, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { categoria } from './categoria.entity';

@Injectable()
export class CategoriasService {
    constructor(
        @Inject('CATEGORIA_REPOSITORY')
        private categoriaRepository: typeof categoria,

        @InjectConnection('mysqldatabase')
        private sequelize: Sequelize,
    ) { }

    getCategoria() {
        return "Hi service"
    }

    async findAll(): Promise<categoria[]> {
        return this.categoriaRepository.findAll<categoria>();
    }


    async saveCategoria(categoria: any): Promise<categoria> {
        return this.categoriaRepository.create(categoria)
    }

    async getCategoriaById(id: number) {
        const categoria = this.categoriaRepository.findOne({
            where: {
                id: id
            }
        });

        return categoria

    }

    async update(id: number, NovaCategoria: categoria): Promise<any> {
        await this.categoriaRepository.update(NovaCategoria, {
            where: {
                id: id
            }
        })
        const categoria = this.categoriaRepository.findOne({
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

        const categoria = this.categoriaRepository.findOne({
            where: {
                id: id
            }
        });

        await this.categoriaRepository.destroy({
            where: {
                id: id
            }
        })


        return categoria
    }

}
