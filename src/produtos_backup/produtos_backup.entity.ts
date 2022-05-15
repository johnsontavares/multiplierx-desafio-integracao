import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class produto_backup extends Model {

    @Column({ type: DataType.INTEGER, unique: true, primaryKey: true })
    id

    // @Column({defaultValue: "asdf"})
    @Column
    idCategoria: string;

    @Column
    codigo: string;

    @Column
    nome: string;

    @Column
    descricao: string;

    @Column
    valor: string;

    @Column
    status: string;

    // @HasMany(() => produto)
    // produto: produto[]
}

