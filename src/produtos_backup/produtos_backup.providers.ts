import { produto_backup } from './produtos_backup.entity'

export const produtos_backup_Providers = [
    {
        provide: 'PRODUTOS_BACKUP_REPOSITORY',
        useValue: produto_backup,
    },
];