import { Table, Column, Model, DataType, ForeignKey, HasOne, } from 'sequelize-typescript';
import { estoque } from 'src/estoques/estoques.entity';
import { categoria } from '../categorias/categoria.entity'

//Entity produtos
@Table
export class produto extends Model {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false })
    id

    @ForeignKey(() => categoria)
    @Column({ type: DataType.INTEGER, allowNull: false })
    idCategoria

    @Column
    codigo: string;

    @Column
    nome: string;

    @Column({ type: DataType.TEXT })
    descricao

    @Column({ type: DataType.FLOAT })
    valor

    @Column
    status: string;

    // @HasOne(() => estoque)
    // estoque: estoque[]

    @HasOne(() => estoque, 'idProduto')
    Estoque: estoque;
}

