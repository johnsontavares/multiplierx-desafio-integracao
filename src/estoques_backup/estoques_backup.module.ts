import { Module } from '@nestjs/common';
import { estoqueProviders } from 'src/estoques/estoques.providers';
import { EstoquesBackupService } from './estoques_backup.service';
import { estoques_backup_Providers } from './estoques_backup.providers'
import { TaskService } from 'src/task.service';
import { categoriaProviders } from 'src/categorias/categoria.providers';
import { categoria_backup_Providers } from 'src/categoria_backup/categoria_backup.providers';

@Module({
  providers: [EstoquesBackupService,
    ...estoques_backup_Providers,
    ...estoqueProviders,
    ...categoriaProviders,
    ...categoria_backup_Providers
  ]



  // providers: [CategoriaBackupService,
  //   ...categoria_backup_Providers,
  //   ...categoriaProviders,
  //   TaskService,]
})
export class EstoquesBackupModule { }
