import React from 'react'
import styles from "./styles.module.scss"
import Button from "@/components/Button/Button";
import Title from '../Title/Title';

const Main = () => {
    return (
        <>
            <div className={styles.main}>
                <div className={styles.pastel}>
                        <Title textTitle="PASTELERIA PRI A TU SERVICIO" textParrafo="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea beatae voluptatem ipsa ab vero veniam deserunt neque voluptatibus obcaecati quis nobis voluptates, blanditiis ducimus enim quas, perferendis fugiat ut minus?"/>                    <div className={styles.navegadores}>
                        <Button tipo="primario" text="Hola soy un botón"></Button>

                        <Button tipo="secundario" text="Hola soy un botón"></Button>
                    </div>
                </div>
                <div>
                    <img src='./tortafrutilla.png'></img>
                </div>
            </div>
        </>
    )
}

export default Main