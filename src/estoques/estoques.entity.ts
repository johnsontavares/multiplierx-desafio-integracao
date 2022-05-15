import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import { categoria } from '../categorias/categoria.entity'
import { produto } from '../produtos/produtos.entity'

const options = {
    modelName: 'Estoque',
    createdAt: false,
    indexes: [

        {
            fields: ['idProduto']
        }
    ]
};

@Table
export class estoque extends Model {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id

    @ForeignKey(() => produto)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        onDelete: 'CASCADE',
        unique: true

    })
    idProduto: number

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    quantidade

    @Column({ defaultValue: 0, type: DataType.INTEGER })
    reserva

    @Column({ type: DataType.INTEGER })
    status


    @BelongsTo(() => produto)
    Produto: produto



    // @BelongsTo(() => produto, { foreignKey 'userId', as 'user'})
    // user: User;

    // @BelongsTo(() => produto)
    // produto: produto


}

