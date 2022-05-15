import { Table, Column, Model, DataType, HasMany, } from 'sequelize-typescript';
import { produto } from '../produtos/produtos.entity'
@Table
export class categoria extends Model {

    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id

    @Column
    codigo: string;

    @Column
    titulo: string;

    @Column
    status: string;

    @HasMany(() => produto)
    produto: produto[]
}

