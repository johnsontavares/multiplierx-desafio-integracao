import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { EstoquesService } from '../estoques/estoques.service';
import { produto } from './produtos.entity';
import { Produto } from './produtos.interface';

// set routes products
@Controller('produtos')
export class ProdutosController {
    constructor(private ProdutosService: ProdutosService,
        private EstoquesService: EstoquesService,) { }

    @Get(':id')
    getProdutoController(@Param('id') id: number) {
        if (id) {
            return this.ProdutosService.getProdutoById(id);
        }
    }

    @Get()
    getProdutosController() {
        return this.ProdutosService.findAll()
    }

    @Get("/estoque/quantidade")
    getEstoquesController() {
        return this.EstoquesService.findAll()
    }

    @Post()
    saveProduto(@Body() newproduto: produto) {

        var produto = this.ProdutosService.saveProduto(newproduto)
        this.EstoquesService.saveEstoquedb(newproduto)
        return produto
        // this.EstoquesService.saveEstoquedb(newproduto)
        // return newproduto
    }

    @Put(':id')
    updateProduto(@Param() params, @Body() categoria: any) {
        return this.ProdutosService.update(params.id, categoria)
    }

    @Delete(':id')
    DeleteProduto(@Param('id') id: number) {
        if (id) {
            return this.ProdutosService.destroy(id);
        }
    }

}
