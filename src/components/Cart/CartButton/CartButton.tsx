import React from 'react'
import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import style from './cartButton.module.css'

type CartButtonTypes = {
    pizzaCartLength: number
    pizzaCartPrice: number

    setTotal: (total: number) => void
}

const CartButton:React.FC<CartButtonTypes> = ({ pizzaCartLength, pizzaCartPrice, setTotal }) => {

    return (
        <div>
            <Button className={style.btnC} type="ghost" shape="round" icon={<ShoppingCartOutlined />}
                    size={'large'} danger ghost onClick={() => setTotal(pizzaCartPrice)}>
                <NavLink className={style.btn} to={'cart'}>
                    Корзина • {pizzaCartPrice} грн • {pizzaCartLength}
                </NavLink>
            </Button>
        </div>
    )
};

export default CartButton