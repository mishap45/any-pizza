import React from 'react'
import PizzaCard_Container from '../PizzaCard/PizzaCard_Container'
import style from '../pizzaList.module.css'
import pizzaOnWood from '../../../API/pizzaOnWood'

const PizzaOnWoodList = () => {
    return (
        <div className={style.pizzaList}>
            {pizzaOnWood.Pizza.map(p => <PizzaCard_Container key={p.id} id={p.id} imgPizza={p.imgPizza}
                                                             namePizza={p.namePizza} descPizza={p.descPizza}
                                                             smallSize={p.smallSize} mediumSize={p.mediumSize}
                                                             bigSize={p.bigSize} price={p.price}
            />)}
        </div>
    )
};

export default PizzaOnWoodList