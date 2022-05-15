import { Module } from '@nestjs/common';
import { produtos_backup_Providers } from './produtos_backup.providers';
import { ProdutosBackupService } from './produtos_backup.service';

@Module({
  providers: [ProdutosBackupService,
    ...produtos_backup_Providers]
})
export class ProdutosBackupModule { }
