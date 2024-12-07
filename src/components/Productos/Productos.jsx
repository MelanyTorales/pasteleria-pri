import React from 'react'
import styles from "./styles.module.scss"
import Link from 'next/link'

const Productos = () => {
  return (
    <Link href="producto" className={styles.producto}>
        <img src="la-mejor-torta-cumpleanospng.webp" alt="tortis" />
        <p className={styles.p}>$500</p>
        <p>Torta</p>
    </Link>
   
  )
}

export default Productos