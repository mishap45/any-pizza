import React from 'react'
import PizzaCard_Container from '../PizzaCard/PizzaCard_Container'
import style from '../pizzaList.module.css'
import brandPizza from '../../../API/brandPizza'

const BrandPizzaList = () => {
    return (
        <div className={style.pizzaList}>
            {brandPizza.Pizza.map(p => <PizzaCard_Container key={p.id} id={p.id} imgPizza={p.imgPizza}
                                                            namePizza={p.namePizza} descPizza={p.descPizza}
                                                            smallSize={p.smallSize} mediumSize={p.mediumSize}
                                                            bigSize={p.bigSize} price={p.price}
            />)}
        </div>
    )
};

export default BrandPizzaList