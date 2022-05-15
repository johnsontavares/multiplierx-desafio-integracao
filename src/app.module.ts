import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { Sequelize } from 'sequelize-typescript';
import { DatabaseModule } from './database/database.module';
import { categoriaProviders } from './categorias/categoria.providers';
import { ProdutosModule } from './produtos/produtos.module';
import { EstoquesModule } from './estoques/estoques.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ScheduleModule } from '@nestjs/schedule';

import { categoria } from './categorias/categoria.entity';
import { produto } from './produtos/produtos.entity';
import { estoque } from './estoques/estoques.entity';
import { categoria_backup } from './categoria_backup/categoria_backup.entity';
import { CategoriaBackupModule } from './categoria_backup/categoria_backup.module';
import { EstoquesBackupModule } from './estoques_backup/estoques_backup.module';
import { estoques_backup } from './estoques_backup/estoques_backup.entity';
import { ProdutosBackupModule } from './produtos_backup/produtos_backup.module';
import { produto_backup } from './produtos_backup/produtos_backup.entity';

@Module({
  imports: [CategoriasModule, DatabaseModule, ProdutosModule, EstoquesModule, ScheduleModule.forRoot(),


    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'senha',
      autoLoadModels: true,
      synchronize: true,
      database: 'myapi',
      name: 'mysqldatabase',
      models: [categoria, produto, estoque],
    }),

    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'library',
      autoLoadModels: true,
      synchronize: true,
      name: 'backup_postgres',
      models: [categoria_backup, estoques_backup, produto_backup],
    }),

    CategoriaBackupModule,

    EstoquesBackupModule,

    ProdutosBackupModule,


  ],


  controllers: [AppController],
  providers: [AppService,
    ...categoriaProviders,]
})
export class AppModule { }
