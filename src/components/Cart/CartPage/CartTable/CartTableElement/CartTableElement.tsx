import React from 'react'
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons'
import style from '../cartTable.module.css'

type CartTableElementTypes = {
    count: number
    id: number
    imgPizza: string
    namePizza: string
    size: string
    price: number

    deleteOneRow: (totalBooster: number, idDelete: number) => void
    addTotal: (totalBooster: number) => void
    subtractTotal: (totalBooster: number) => void
}

const CartTableElement:React.FC<CartTableElementTypes> = ({ count, price, namePizza, imgPizza,
                                                              id, size, deleteOneRow, addTotal, subtractTotal }) => {

    return (
        <tr>
            <td className={style.tableLeveling}>
                <img src={imgPizza} alt="goods" width={100} />
                <span>
                        <p className={style.nameWidth}>{namePizza}</p>
                        <p>Діаметр: {size}</p>
                    </span>
            </td>

            <td className={style.tableLevelingLine}>
                {price} грн
            </td>

            <td className={style.tableLevelingLine}>
                <div className={style.tableLeveling}>
                    <MinusOutlined className={style.controlCount} onClick={() => subtractTotal(price)} />
                    { count }
                    <PlusOutlined className={style.controlCount} onClick={() => addTotal(price)} />
                </div>
            </td>

            <td className={style.tableLevelingLine}>
                {price * count} грн
            </td>

            <td className={style.tableLevelingAction}>
                <CloseOutlined onClick={() => {
                    const realPrice = price * count;
                    deleteOneRow(realPrice, id)
                }}
                    className={style.delete} />
            </td>
        </tr>
    )
};

export default CartTableElement