import React from "react";
import styles from "./styles.module.scss";
import Button from "../Button/Button";
import Title from "../Title/Title";

const Muffins = ({ tipo, text }) => {
    return (
        <div className={styles.Muffins}>
            <img className={styles.muffinschocolate} src="./muffinschocolate.png" alt="muf" />

            <div className={styles.Menus}>
                <Title textTitle="¿Quienes Somos?" textParrafo="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis esse ipsa laborum nisi, odit vero facilis dolor expedita ut labore deserunt blanditiis quas, asperiores excepturi est culpa illum sapiente officiis."></Title>
                <Button tipo="secundario" text="Button"></Button>
            </div>
        </div>
    )
}

export default Muffins