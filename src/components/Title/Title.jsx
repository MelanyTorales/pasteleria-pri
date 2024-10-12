import React from 'react'
import styles from "./styles.module.scss"
import {Menus2} from '../Button/Button'
import Flotante from '../Flotante/Flotante'

const Title = ({textTitle, textParrafo, colorProps, fuente}) => {
  return (
    <>
        <h2 style={{color: colorProps, fontFamily: fuente}} className={styles.titulo}>
            {textTitle}
        </h2>
        <p className={styles.parrafo}>
            {textParrafo}
        </p>
    </>
  )
}

export default Title