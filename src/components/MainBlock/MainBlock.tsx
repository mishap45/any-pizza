import React from 'react'
import style from './mainBlock.module.css'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import Separator from './Separator/Separator'
import { Route, Switch, Redirect } from 'react-router-dom'
import PizzaOnWoodList from '../PizzaList/PizzaOnWoodList/PizzaOnWoodList'
import BrandPizzaList from '../PizzaList/BrandPizzaList/BrandPizzaList'
import MiniPizzaList from '../PizzaList/MiniPizzaList/MiniPizzaList'
import CartPage_Container from '../Cart/CartPage/CartPage_Container'
import CartButton_Container from '../Cart/CartButton/CartButton_Container'

const ErrorPage = () => {
    return <div>error</div>;
};

const MainBlock = () => {
    return (
        <div className={style.main}>
            <div className={style.head}>
                <Header />
                <CartButton_Container />
            </div>

            <Separator />

            <div className={style.content}>
                <SideBar/>
                <Switch>
                    <Route exact path={"/pizza_on_wood"} component={PizzaOnWoodList} />
                    <Route exact path={"/brand_pizza"} component={BrandPizzaList} />
                    <Route exact path={"/mini_pizza"} component={MiniPizzaList} />
                    <Route exact path={"/cart"} component={CartPage_Container} />
                    <Route exact path='/' render={() => <Redirect to={"/pizza_on_wood"} />}/>
                    <Route path='*' component={ErrorPage}/>
                </Switch>
            </div>
        </div>
    )
};

export default MainBlock