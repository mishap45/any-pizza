import React from 'react'
import { Button } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css'
import { NavLink } from 'react-router-dom'
import style from './cartButton.module.css'

const CartButton = () => {
    return (
        <div>
            <Button className={style.btnC} type="ghost" shape="round" icon={<ShoppingCartOutlined />} size={'large'} danger ghost>
                <NavLink className={style.btn} to={'cart'}>
                    Корзина | 0 грн | 0
                </NavLink>
            </Button>
        </div>
    )
};

export default CartButton