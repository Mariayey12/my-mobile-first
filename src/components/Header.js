import React, { useState } from "react";

import styles from "./Header.module.scss";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { FcAbout} from "react-icons/fc";
import { FcSettings} from "react-icons/fc";
import {FcServices } from "react-icons/fc";

const Header = () => {
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
                        <a className={styles.nav__item} href={"/"}>
                      
                            <h3>  <FcAbout/>  About</h3> 
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                      
                        <h3>   CatApi  <FcSettings /> </h3>
                      
                        </a>
                        <a className={styles.nav__item} href={"/"}>
                            Blog  <FcServices />
                        </a>
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

export default Header;