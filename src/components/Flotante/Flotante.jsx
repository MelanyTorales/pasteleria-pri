import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import styles from "./styles.module.scss"

const Flotante = () => {
  return (
    <div className={styles.flotantes}>
        <button className={styles.Whatsapp}><a href="https://wa.me/124235235?text=Hola! quiero hacer un pedido" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a></button>

        <button className={styles.Instagram}><a href="http://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></button>

        <button className={styles.llamada}><a href="tel:+12423623" target="_blank" rel="noopener noreferrer"><IoIosCall /></a></button>
    </div>
  )
}

export default Flotante