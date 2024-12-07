import React from 'react'
import styles from "./styles.module.scss"
import Title from '../Title/Title'
import Button from '../Button/Button'
import { IoLocationSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import Link from 'next/link';

const Footer = () => {
return (
    <div className={styles.footer}>
        <div className={styles.subscriptor}>
            <Title 
                textTitle="Suscribite a nuestra pasteleria" 
                textParrafo="Lorem ip. Ducimus nihil dolor temporibus alias facere dolorem eveniet, excepturi, non, quo ipsa hic maxime praesentium earum architecto. Maxime nulla id tempora similique?"
            />
            <div className={styles.imput}>
            <input placeholder="Ingresa tu email" type="email"/>
            <Button tipo={"primario"} text={"Subcribite"}>
            </Button>
            </div>
        </div>

        <div className={styles.footerReal}>

        <div className={styles.columnas}>
                <p style={{fontWeight:"bold", marginBottom:"20px"}}>Pasteleria Pri</p>
                <Link href="/Inicio"> Inicio </Link>
                <Link href="/Nosotros"> Nosotros </Link>
                <Link href="/Menu"> Menu </Link>
                <Link href="/Perfil"> Perfil </Link>
                <Link href="/carrito"> Carrito </Link>
            </div>

            <div className={styles.columnas2}>

                <p style={{fontWeight:"bold", marginBottom:"20px"}} >Contacto</p>
                <p><IoLocationSharp color="red" size={20}/>Barracas</p>
                <p><MdLocalPhone color='red' size={20}/>123456678</p>
                <p><IoIosMail color='red' size={20}/>gaslajxakxñjdas@</p>   
            </div>
            <div className={styles.logoFooter}>
                <img src="./logo.jpg" alt="logo"/>
                <p> 
                        Ut eligendi consequatur natus quis odit quae doloribus, animi necessitatibus?
                </p>
            </div>
        </div>
    </div>
)
}

export default Footer