import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { categoria_backup } from './categoria_backup.entity'
import { categoria } from '../categorias/categoria.entity'

@Injectable()
export class CategoriaBackupService {
    // CATEGORIA_BACKUP_REPOSITORY
    constructor(
        @Inject('CATEGORIA_BACKUP_REPOSITORY')
        private categoriabackupRepository: typeof categoria_backup,

        @InjectConnection('mysqldatabase')
        private sequelize: Sequelize,
    ) { }

    // async saveCategoriaBackup(categoria: any): Promise<categoria_backup> {
    //     return this.categoriabackupRepository.create(categoria)
    // }
}
