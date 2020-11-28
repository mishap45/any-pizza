import React from 'react'
import style from './sideBar.module.css'
import { NavLink } from 'react-router-dom'
import pizza_on_wood from '../../assets/icons/fireplace.svg'
import brand_pizza from '../../assets/icons/pizza-slice.svg'
import mini_pizza from '../../assets/icons/pizza_mini.svg'
import SideBarItem from './SideBarItem/SideBarItem'

const SideBar = () => {
    return (
        <div className={style.sideBarBlock}>
            <div>
                <NavLink to={'pizza_on_wood'} className={style.pizzaChoose} activeClassName={style.pizzaSelect}>
                    <SideBarItem src={pizza_on_wood} menuItemText={'Піца на дровах'} />
                </NavLink>
            </div>

            <div>
                <NavLink to={'brand_pizza'} className={style.pizzaChoose} activeClassName={style.pizzaSelect}>
                    <SideBarItem src={brand_pizza} menuItemText={'Піца фірмова'} />
                </NavLink>
            </div>

            <div>
                <NavLink to={'mini_pizza'} className={style.pizzaChoose} activeClassName={style.pizzaSelect}>
                    <SideBarItem src={mini_pizza} menuItemText={'Міні піца'} />
                </NavLink>
            </div>
        </div>
    )
};

export default SideBar