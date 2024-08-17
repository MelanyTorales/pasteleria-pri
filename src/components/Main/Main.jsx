import React from 'react'
import styles from "./styles.module.scss"
import Button from "@/components/Button/Button";

const Main = () => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.pastel}>
        <h1 className={styles.titulo}>PASTELERIA PRI A TU SERVICIO</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis impedit iure commodi libero molestiae sequi, minima a mollitia porro quia odio nam eos, eveniet neque. Excepturi autem nam voluptate accusantium.</p>
        
        <div className={styles.navegadores}>
            <Button tipo="primario" text="Hola soy un botón"></Button>

            <Button tipo="secundario" text="Hola soy un botón"></Button>
        </div>
        </div>
        <div>
            <img src='./torta.png'></img>
        </div>
    </div>
    </>
  )
}

export default Main