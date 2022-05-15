import { categoria } from './categoria.entity';

export const categoriaProviders = [
    {
        provide: 'CATEGORIA_REPOSITORY',
        useValue: categoria,
    },
];