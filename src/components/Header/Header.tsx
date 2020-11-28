import React from 'react'
import style from './header.module.css'
import LogoPizza from '../../assets/icons/logo.svg'

const Header = () => {
    return (
        <div className={style.headerBlock}>
            <img src={LogoPizza} alt="logo" width={80} />
            <p className={style.logoText}>Any Pizza?</p>
        </div>
    )
};

export default Header