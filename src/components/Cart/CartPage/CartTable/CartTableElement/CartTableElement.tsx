import React from 'react'
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons'
import style from '../cartTable.module.css'
import { Button } from 'antd'

type CartTableElementTypes = {
    count: number
    id: number
    imgPizza: string
    namePizza: string
    size: string
    price: number

    setCount: (cont: number) => void
    deleteOne: (idDelete: number) => void
}

const CartTableElement:React.FC<CartTableElementTypes> = ({ count, setCount, price, namePizza, imgPizza,
                                                              id, size, deleteOne }) => {
    return (
        <tr key={id}>
            <td className={style.tableLeveling}>
                <img src={imgPizza} alt="goods" width={100} />
                <span>
                        <p>{namePizza}</p>
                        <p>Діаметр: {size}</p>
                    </span>
            </td>
            <td>
                {price}
            </td>
            <td>
                <div className={style.tableLeveling}>
                    <MinusOutlined className={style.controlCount} onClick={() => count === 1
                        ? setCount(1)
                        : setCount(count - 1) } />
                    { count }
                    <PlusOutlined className={style.controlCount} onClick={() => setCount(count + 1)} />
                </div>
            </td>
            <td>
                {price * count}
            </td>
            <td>
                <CloseOutlined onClick={() => deleteOne(id)} className={style.delete} />
            </td>
        </tr>
    )
};

export default CartTableElement