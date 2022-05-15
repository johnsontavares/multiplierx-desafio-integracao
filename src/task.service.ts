import { Inject, Injectable, Logger } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { SequelizeModule } from "@nestjs/sequelize";
import { estoque } from "src/estoques/estoques.entity";
import { produto } from "src/produtos/produtos.entity";
import { categoria } from "./categorias/categoria.entity";
import { categoria_backup } from "./categoria_backup/categoria_backup.entity";
import { estoques_backup } from "./estoques_backup/estoques_backup.entity"
import { produto_backup } from "./produtos_backup/produtos_backup.entity";

@Injectable()
export class TaskService {
    constructor(
        @Inject('CATEGORIA_REPOSITORY')
        private categoriaRepository: typeof categoria,

        @Inject('CATEGORIA_BACKUP_REPOSITORY')
        private categoriabackupRepository: typeof categoria_backup,

        @Inject('ESTOQUES_BACKUP_REPOSITORY')
        private estoquesbackupRepository: typeof estoques_backup,

        @Inject('ESTOQUE_REPOSITORY')
        private estoquesRepository: typeof estoque,

        @Inject('PRODUTOS_BACKUP_REPOSITORY')
        private produtosbackupRepository: typeof produto_backup,
        // @InjectConnection('mysqldatabase')
        // private sequelize: Sequelize,
        @Inject('PRODUTOS_REPOSITORY')
        private produtoRepository: typeof produto,
    ) { }

    private readonly logger = new Logger(TaskService.name)

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleCategoriasBackup(): Promise<any> {
        this.logger.debug("Cron categoria Running !")

        const categorias = await this.categoriaRepository.findAll()
        const categoriasBackup = await this.categoriabackupRepository.findAll()

        const data = categorias.filter((item1) =>

            categoriasBackup.every((item2) => item1.id != item2.id)
        )
        // console.log(data)

        for (var i = 0; i < data.length; i++) {
            console.log("insert data " + data[i].codigo)

            this.categoriabackupRepository.create({
                id: data[i].id,
                titulo: data[i].titulo,
                codigo: data[i].codigo,
                status: data[i].status,
            })


        }
    }

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleEstoquesBackup(): Promise<any> {
        this.logger.debug("Cron estoque Running !")

        const estoques = await this.estoquesRepository.findAll()
        const estoquesBackup = await this.estoquesbackupRepository.findAll()

        const data = estoques.filter((item1) =>

            estoquesBackup.every((item2) => item1.id != item2.id)
        )
        console.log(data)

        for (var i = 0; i < data.length; i++) {
            console.log("insert data " + data[i].id)

            this.estoquesbackupRepository.create({
                id: data[i].id,
                idProduto: data[i].idProduto,
                quantidade: data[i].quantidade,
                reserva: data[i].reserva,
                status: data[i].status,
            })
        }
    }

    @Cron(CronExpression.EVERY_10_SECONDS)
    async handleProdutosBackup(): Promise<any> {
        this.logger.debug("Cron produtos running! ")

        const produtos = await this.produtoRepository.findAll()
        console.log(produtos)
        const produtosBackup = await this.produtosbackupRepository.findAll()

        const data = produtos.filter((item1) =>
            produtosBackup.every((item2) => item1.id != item2.id)
        )
        console.log("produtos backup tamanho = " + data.length)
        //     const data = estoques.filter((item1) =>

        //     estoquesBackup.every((item2) => item1.id != item2.id)
        // )
        // console.log(data)

        for (var i = 0; i < data.length; i++) {
            console.log("insert data " + data[i].codigo)

            this.produtosbackupRepository.create({
                id: data[i].id,
                idCategoria: data[i].idCategoria,
                codigo: data[i].codigo,
                status: data[i].status,
                nome: data[i].nome,
                descricao: data[i].descricao,
                valor: data[i].valor,
            })


        }
    }



}