import React from 'react'
import PizzaCard_Container from '../PizzaCard/PizzaCard_Container'
import style from '../pizzaList.module.css'

const BrandPizzaList = () => {
    return (
        <div className={style.pizzaList}>
            <PizzaCard_Container />
            <PizzaCard_Container />
            <PizzaCard_Container />
            <PizzaCard_Container />
            <PizzaCard_Container />
        </div>
    )
};

export default BrandPizzaList