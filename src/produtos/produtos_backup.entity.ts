import { Table, Column, Model, DataType, ForeignKey, HasOne, } from 'sequelize-typescript';
import { categoria } from '../categorias/categoria.entity'

@Table
export class produtos_backup extends Model {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true, allowNull: false })
    id

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

    // @HasOne(() => estoque, 'idProduto')
    // Estoque: estoque;
}

