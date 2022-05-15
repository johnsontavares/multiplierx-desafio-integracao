import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriasService } from './categorias.service';
import { categoria } from './categoria.entity';

@Controller('categorias')
export class CategoriasController {
    constructor(private CategoriasService: CategoriasService) { }

    @Get(':id')
    getCategoriaController(@Param('id') id: number) {
        if (id) {
            return this.CategoriasService.getCategoriaById(id);
        }
    }

    @Get()
    getCategoriasController() {
        return this.CategoriasService.findAll()
    }

    @Post()
    saveCategoria(@Body() newcategoria) {
        return this.CategoriasService.saveCategoria(newcategoria)
    }

    @Put(':id')
    updateCategoria(@Param() params, @Body() categoria: any) {
        return this.CategoriasService.update(params.id, categoria)
    }

    @Delete(':id')
    DeleteCategoria(@Param('id') id: number) {
        if (id) {
            return this.CategoriasService.destroy(id);
        }
    }

}
