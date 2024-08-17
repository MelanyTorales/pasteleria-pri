import React from 'react'
import styles from "./styles.module.scss"
import { GoPerson } from "react-icons/go";
import { RiShoppingCartLine } from "react-icons/ri";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoConteiner}>
                <img src="./logo.jpg" alt="logo" className={styles.logo} />

            </div>

            <nav className={styles.menu}>
                <ul>
                    <li>Inicio</li>
                    <li>Nosotros</li>
                    <li>Menu</li>
                    <li>Contacto</li>
                </ul>

            </nav>

            <div className={styles.carrito}>
                <ul>
                    <li><GoPerson /> Mi cuenta</li>
                    <li><RiShoppingCartLine /> Carrito</li>
                </ul>
            </div>
        </header>
    )
}

export default Header