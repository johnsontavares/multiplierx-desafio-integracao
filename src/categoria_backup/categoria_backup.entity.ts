import { Table, Column, Model, DataType, HasMany, } from 'sequelize-typescript';
import { produto } from '../produtos/produtos.entity'
@Table
export class categoria_backup extends Model {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true })
    id

    // @Column({defaultValue: "asdf"})
    @Column
    codigo: string;

    @Column
    titulo: string;

    @Column
    status: string;

    // @HasMany(() => produto)
    // produto: produto[]
}

