import { produto } from './produtos.entity';

export const produtoProviders = [
    {
        provide: 'PRODUTOS_REPOSITORY',
        useValue: produto,
    },
];