import { categoria_backup } from './categoria_backup.entity';

export const categoria_backup_Providers = [
    {
        provide: 'CATEGORIA_BACKUP_REPOSITORY',
        useValue: categoria_backup,
    },
];