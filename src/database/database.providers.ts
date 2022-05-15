import { Sequelize } from 'sequelize-typescript';

/**
 * SEQUELIZE variable is stored in a file named
 * 'constants' so it can be easily reused anywhere
 * without being subject to human error.
 */
import { categoria } from '../categorias/categoria.entity';
import { produto } from '../produtos/produtos.entity';
import { estoque } from '../estoques/estoques.entity';

export const databaseProviders = [
    // {
    //     provide: Sequelize,
    //     useFactory: async () => {
    //         const sequelize = new Sequelize({
    //             dialect: 'mysql',
    //             host: 'localhost',
    //             port: 3306,
    //             username: 'root',
    //             password: 'senha',
    //             database: 'myapi',
    //         });

    //         sequelize.addModels([categoria, produto, estoque]);
    //         await sequelize.sync();
    //         return sequelize;
    //     },

    // },
    // {
    //     provide: Sequelize,
    //     useFactory: async () => {
    //         const sequelize2 = new Sequelize({
    //             dialect: 'postgres',
    //             host: 'localhost',
    //             port: 5432,
    //             username: 'postgres',
    //             password: 'password',
    //             database: 'library',
    //         });

    //         sequelize2.addModels([categoria, produto, estoque]);

    //         await sequelize2.sync();
    //         return sequelize2;
    //     },

    // },
];