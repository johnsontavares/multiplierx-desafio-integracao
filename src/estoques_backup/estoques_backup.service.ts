import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { estoques_backup } from '../estoques_backup/estoques_backup.entity'
import { categoria } from '../categorias/categoria.entity'

@Injectable()
export class EstoquesBackupService {
    // CATEGORIA_BACKUP_REPOSITORY
    constructor(
        @Inject('ESTOQUES_BACKUP_REPOSITORY')
        private estoquesBackupRepository: typeof estoques_backup,

        @InjectConnection('mysqldatabase')
        private sequelize: Sequelize,
    ) { }

    async saveEstoquesBackup(estoques_backup: any): Promise<estoques_backup> {
        return this.estoquesBackupRepository.create(estoques_backup)
    }
}
