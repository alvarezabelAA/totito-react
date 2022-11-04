import AlertProvider from '../context/AlertProvider'
import SonidoProvider from '../context/SonidoProvider'
import Tablero from './tablero'

/*Implementamos la clase totito donde llamamos a la funcion tablero*/
const Totito = () =>{
  return(
    <div>
      <SonidoProvider>
        <AlertProvider>
          <Tablero></Tablero>
        </AlertProvider>
      </SonidoProvider>
    </div>
  )
}

export default Totito
