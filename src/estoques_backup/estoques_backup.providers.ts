import { estoques_backup } from './estoques_backup.entity'

export const estoques_backup_Providers = [
    {
        provide: 'ESTOQUES_BACKUP_REPOSITORY',
        useValue: estoques_backup,
    },
];