/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import {  NavLink } from 'react-router-dom';
import styles
 from "./Nabvar.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FcAbout} from "react-icons/fc";
import { FcSettings} from "react-icons/fc";
import {FaBloggerB } from "react-icons/fa";

const Nabvar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);

    return (
        <div className={styles.header}>
            <div className={styles.header__content}>
                <div>
                    <span className={styles.logo}>Code Focus</span>
                </div>
                <div>
                    <nav className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}>
                        <NavLink to={"./about"} className={styles.nav__item} >
                      
                            <h4>  About  <FcAbout/> </h4> 
                        </NavLink>
                        <NavLink to={"./api"} className={styles.nav__item} >
                      
                        <h4>   CategoriasApp  <FcSettings /> </h4>
                      
                        </NavLink>
                       
                        <NavLink  to={"/blog"}className={styles.nav__item} >
                        <h4>    Blog  <FaBloggerB/> </h4> 
                        </NavLink>
                        <div className={styles.nav__button__container}>
                            <Button />
                        </div>
                    </nav>
                </div>
                
                <div>
                    <div className={styles.header__button__container}>
                        <Button />
                    </div>
                    <button className={styles.header__toggler} onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight /> : <AiOutlineCloseSquare />}
                    </button>
                </div>
            </div>
        </div>
    );
};

const Button = () => {
    return <button className={styles.button}>Click me</button>;
};

export default Nabvar;




