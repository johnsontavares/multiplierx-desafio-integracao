import { Module } from '@nestjs/common';
import { CategoriaBackupService } from './categoria_backup.service';
import { categoria_backup_Providers } from './categoria_backup.providers'
import { TaskService } from '../task.service'
import { categoriaProviders } from 'src/categorias/categoria.providers';
import { estoques_backup_Providers } from 'src/estoques_backup/estoques_backup.providers';
import { estoqueProviders } from 'src/estoques/estoques.providers';
@Module({
  providers: [CategoriaBackupService,
    ...categoria_backup_Providers,
    ...categoriaProviders,
    ...estoques_backup_Providers,
    ...estoqueProviders
  ]
})
export class CategoriaBackupModule { }
