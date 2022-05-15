import { estoque } from './estoques.entity';

export const estoqueProviders = [
    {
        provide: 'ESTOQUE_REPOSITORY',
        useValue: estoque,
    },
];