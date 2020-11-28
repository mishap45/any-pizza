import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'
import { MinusOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons'
import style from './cartTable.module.css'

type CartTableTypes = {
    count: number

    setCount: (cont: number) => void
}

const CartTable:React.FC<CartTableTypes> = ({ count, setCount }) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Товар</th>
                <th>Ціна</th>
                <th>Кількість</th>
                <th>Вартість</th>
                <th>Дії</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td className={style.tableLeveling}>
                    <img src="https://tiptop-pizza.com.ua/image/cache/catalog/pizza/havai_new-120x120.jpg" alt="goods"/>
                    <span>
                        <p>Гавайська</p>
                        <p>Діаметр: {'30'}</p>
                    </span>
                </td>
                <td>
                    {'81 грн'}
                </td>
                <td>
                    <div className={style.tableLeveling}>
                        <MinusOutlined className={style.controlCount} onClick={() => setCount(count - 1)} />
                        { count }
                        <PlusOutlined className={style.controlCount} onClick={() => setCount(count + 1)} />
                    </div>
                </td>
                <td>
                    {'185 грн'}
                </td>
                <td><CloseOutlined className={style.delete} /></td>
            </tr>
            </tbody>
        </Table>
    )
};

export default CartTable