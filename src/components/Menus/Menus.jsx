import React from "react";
import styles from "./styles.module.scss"

const Menus = () => {
    return (

        <div className={styles.varios}>
            <div className={styles.Menus}>
                <h1 className={styles.algo}>Bienvenidos a las Delicias de Pri</h1>
                <p className={styles.otro}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vitae placeat optio.</p>
            </div>

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