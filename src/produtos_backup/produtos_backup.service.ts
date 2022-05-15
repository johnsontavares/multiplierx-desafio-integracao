import { Inject, Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { produto_backup } from './produtos_backup.entity';

@Injectable()
export class ProdutosBackupService {
    // CATEGORIA_BACKUP_REPOSITORY
    constructor(
        @Inject('PRODUTOS_BACKUP_REPOSITORY')
        private produtosBackupRepository: typeof produto_backup,

        @InjectConnection('mysqldatabase')
        private sequelize: Sequelize,
    ) { }

    // async saveProdutosBackup(produtos_backup: any): Promise<produto_backup> {
    //     return this.produtosBackupRepository.create(produtos_backup)
    // }
}
