import React from 'react'
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.css'
import { orderPizza } from '../../../../store/reducers/CartReducer'
import CartTableElement_Container from "./CartTableElement/CartTableElement_Container";

type CartTableTypes = {
    Pizza: Array<orderPizza>

    deleteOne: (idDelete: number) => void
}

const CartTable:React.FC<CartTableTypes> = ({ Pizza, deleteOne }) => {
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
            { Pizza.map(p => <CartTableElement_Container id={p.id} imgPizza={p.imgPizza} deleteOne={deleteOne}
                                                         namePizza={p.namePizza} size={p.size} price={p.price} /> )}
            </tbody>
        </Table>
    )
};

export default CartTable