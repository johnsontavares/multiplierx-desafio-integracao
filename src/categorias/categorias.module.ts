import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriasService } from './categorias.service';
import { categoria } from './categoria.entity';
import { Sequelize } from 'sequelize-typescript';
import { getConnectionToken, SequelizeModule } from '@nestjs/sequelize';
import { categoriaProviders } from './categoria.providers';
import { TaskService } from '../task.service';
import { categoria_backup_Providers } from 'src/categoria_backup/categoria_backup.providers';
import { estoques_backup_Providers } from 'src/estoques_backup/estoques_backup.providers';
import { estoqueProviders } from 'src/estoques/estoques.providers';
import { produtos_backup_Providers } from 'src/produtos_backup/produtos_backup.providers';
import { produtoProviders } from 'src/produtos/produtos.providers';

@Module({
    imports: [
        SequelizeModule.forFeature([categoria], 'mysqldatabase'),

    ],
    controllers: [CategoriasController],
    providers: [CategoriasService,
        ...categoriaProviders,
        ...categoria_backup_Providers,
        ...estoques_backup_Providers,
        ...estoqueProviders,
        ...produtos_backup_Providers,
        ...produtoProviders,
        TaskService,

    ],


})
export class CategoriasModule { }
