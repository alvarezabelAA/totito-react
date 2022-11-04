import classNames from "classnames"
import { AlertContext } from '../context/AlertProvider'
import { useContext, useState } from 'react'
import useSound from 'use-sound';
import { SonidosContext } from '../context/SonidoProvider'


const Cuadro = ({valor, alHacerClick, ganador}) => {
    const alert = useContext(AlertContext)
  
    const sonidos = useContext(SonidosContext)

    let claseCuadros = classNames({
        cuadro: true,
        [`cuadro--${valor}`]: valor !== '',
        ganador: ganador,
    })

    return(
        
        <div className="">
        <button className={claseCuadros} onClick={() => alHacerClick()}></button>
        </div>
    )
}

export default Cuadro