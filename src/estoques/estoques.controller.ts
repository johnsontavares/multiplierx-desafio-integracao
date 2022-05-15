import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { EstoquesService } from './estoques.service';
import { estoque } from './estoques.entity';


@Controller('produtos')
export class EstoquesController {
    constructor(private EstoquesService: EstoquesService) { }

    @Get(':id/estoque')
    getEstoqueController(@Param('id') id: number) {
        if (id) {
            return this.EstoquesService.getEstoqueById(id);
        }
    }



    @Post()
    saveEstoque(@Body() newestoque: any) {
        console.log(newestoque)

        return this.EstoquesService.saveEstoquedb(newestoque)
    }

    @Put(':id/estoque')
    updateEstoque(@Param() params, @Body() estoque: any) {
        return this.EstoquesService.update(params.id, estoque)
    }

    @Delete(':id/estoque')
    @HttpCode(501)
    DeleteEstoque() {
        return "não se pode deletar um estoque"
    }

}
