import React from 'react'
import styles from "./styles.module.scss"


const Button = ({ tipo, text }) => {
  return (
    <>
      <button className={tipo === "primario" ? styles.primario : styles.secundario}>
        {text}
      </button>
    </>
  )
}

export default Button