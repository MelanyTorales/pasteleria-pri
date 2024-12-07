import React from "react";
import styles from "./styles.module.scss"
import Title from "../Title/Title";

const Menus = () => {
    return (

        <div className={styles.varios}>
            <Title
                textTitle="Bienvenidos a las Delicias de Pri"
                textParrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit."
            ></Title>

            <div className={styles.comidas}>
                <div className={styles.velvet}>
                    <img className={styles.torta} src="./velvet.png" alt="velvet"/>
                    <p>VELVET</p> 
                </div> 

                <div className={styles.velvet}>
                    <img className={styles.chipas} src="./chipa.png" alt="chipa"/>
                    <p>CHIPA</p>
                </div>

                <div className={styles.velvet}>
                    <img className={styles.pastaflora} src="./flora.png" alt="flora"/>
                    <p>FLORA</p>
                </div> 

                <div className={styles.velvet}>
                    <img className={styles.chipss} src="./chips.png" alt="chips"></img>
                    <p>CHIPS</p>
                </div>
            </div>
        </div>

    )
}

export default Menus