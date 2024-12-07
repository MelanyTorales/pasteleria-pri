import React from 'react'
import styles from "./styles.module.scss"
import Productos from '../Productos/Productos'

const ContenedorProductos = () => {
  return (
    <div className={styles.nose}>
      <Productos></Productos>
      <Productos></Productos>
      <Productos></Productos>
      <Productos></Productos>
      <Productos></Productos>
      <Productos></Productos>
      <Productos></Productos>
      <Productos></Productos>
    </div>
  )
}

export default ContenedorProductos