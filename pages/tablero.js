import { useContext, useState } from 'react'
import { AlertContext } from '../context/AlertProvider'
import { SonidosContext } from '../context/SonidoProvider'
import useSound from 'use-sound';
import Cuadro from './cuadro'
import classNames from "classnames"

/*Agregamos la clase Tablero*/


const Tablero = () =>{
    const [cuadros, setCuadros] = useState(Array(9).fill(null))
    const [turno, setTurno] = useState('X')
    const [ganador, setGanador]= useState([])
    const [resultado, setResultado]=useState({
        X:0,
        O:0
    });


const alert = useContext(AlertContext)
const sonidos = useContext(SonidosContext)

const pintaFigura =(indexItem) => {
    if(cuadros[indexItem] != null){
        sonidos.reproduce('error')
        alert.show(<p className='text-yellow-400'>⚠️ CASILLA YA SELECCIONADA</p>, 'Esta Casilla ya fue seleccionada por el jugador ' +cuadros[indexItem]+ ' intente con otra.')
        return;
    }
    const misCuadritos = cuadros.slice()
    misCuadritos.splice(indexItem,1,turno)
    setCuadros(misCuadritos);
    if(turno === 'X'){
        setTurno('O');
    } else {
        setTurno('X');
    }
    calculaGanador(misCuadritos);
    
}

const terminar_juego =(resulta2, pos_ganadora)=>{
    sonidos.reproduce('gana')
    alert.show(<p className='text-orange-400'>🏅TENEMOS GANADOR</p>, 'Felicidades el ganador es: ' +' '+ resulta2) 
    setTurno(null)
    if(resulta2 !== null){
        setResultado({
            ...resultado,
            [resulta2]:resultado[resulta2]+1,
        })
    }
    setGanador(pos_ganadora)
    setTimeout(() => {
        reiniciarJuego();
    },3000);

}



const calculaGanador= (mytablero) =>{
    const jugadasGanadoras = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for(let indiceJugada = 0; indiceJugada<jugadasGanadoras.length; indiceJugada++){
        const [a,b,c] = jugadasGanadoras[indiceJugada];
        if(mytablero[a] && mytablero[a] === mytablero[b] && mytablero[a] === mytablero[c]){ 
                terminar_juego(mytablero[a], jugadasGanadoras[indiceJugada])
                return
        }
    }
    return ''
}


const reiniciarJuego = () =>{
    setTurno('X')
    setCuadros(Array(9).fill(null));
    setGanador([]);
}


let claseTurnos = classNames({
    turno: true,
    [`turno--${turno}`]: turno !== '',
})



    return(
            /*Agregamos los cuadros y los personalize un poco a mi gusto*/
    <div className='text-center h-screen w-screen bg-gray-800 p-10'> 
        <div className="text-8xl font-extrabold mt-20 mb-5 text-center ">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-200">
                TOTITO
            </span>
        </div>
        <div className='flex items-center justify-center text-white'>
            <div className='bg-gray-500  h-10 mb-2 w-80 rounded hover:bg-blue-200 bg-clip-padding
                border-t-4 border-blue-600 '>
                <button className={claseTurnos}></button>
            </div>
            <div>

            </div>
        </div>
        <div className="grid grid-flow-col grid-rows-3 gap-3 justify-center items-center">
           {
               cuadros.map((item,indexItem)=>{
                   return <Cuadro 
                   turno={turno}
                   ganador={ganador.includes(indexItem)}
                   key={indexItem} 
                   valor={item}
                   alHacerClick = {() => pintaFigura(indexItem)}
                   
                   />
                })
            }

        </div>
        <div className='flex items-center justify-center mt-3'>
            <div className='text-white bg-gray-700 mr-0.5 w-40 h-10 rounded hover:bg-blue-200 bg-clip-padding
                border-t-4 border-blue-600  '>
                <p className='mt-2 font-bold'>X : {resultado.X}</p>
            </div>
            <div className='text-white bg-gray-700 ml-0.5 w-40 h-10 rounded hover:bg-green-400 bg-clip-padding
                border-t-4 border-green-600  '>
                <p className='mt-1 font-bold'>O : {resultado.O}</p>
            </div>
        </div>
        <button className='w-80 mt-2 mb-10 shadow-2xl bg-gray-900 p-5 rounded font-bold text-white hover:bg-blue-900 shadow-md shadow-blue-500/50' onClick={() => reiniciarJuego()}> REINICIAR JUEGO</button>
    </div>
    )
}

export default Tablero