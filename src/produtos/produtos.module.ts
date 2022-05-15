import { Module } from '@nestjs/common';
import { ProdutosController } from './produtos.controller';
import { ProdutosService } from './produtos.service';
import { produtoProviders } from './produtos.providers';
import { EstoquesService } from '../estoques/estoques.service';
import { estoqueProviders } from '../estoques/estoques.providers';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosService, EstoquesService,
    ...produtoProviders,
    ...estoqueProviders],
})
export class ProdutosModule { }

