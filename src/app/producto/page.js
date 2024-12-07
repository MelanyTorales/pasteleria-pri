"use client"
import React, {useState, useEffect} from 'react'

const page = () => {
    const [contador, setContador] = useState(0)
    const [producto, setProducto] = useState(null)
    const stock = 9

    const subirContador = () => {
        setContador(contador + 1)
    }

    const traerProductoDesdeLaBD = () => {
        setProducto("lo que me trae el back")

    }

    const bajarContador = () => {
        if (contador === 0) {
            return
        } else {
            setContador(contador - 1)
        }
    }

    useEffect(() => {
        console.log("console")
    }, [producto])
    

  return (
    <div>
        <button onClick={bajarContador}>-</button>
        <p>{contador}</p>
        <button onClick={subirContador}>+</button>
    </div>
  )
}

export default page