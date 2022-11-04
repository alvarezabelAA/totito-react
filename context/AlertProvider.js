import { createContext,useState } from "react";
import Alert from "../components/Alert";

export const AlertContext = createContext()

const AlertProvider =({children}) => {
    const [mostrarAlerta, setMostrarAlerta] = useState(false)
    const [titulo, setTitulo] = useState('Alerta')
    const [mensaje, setMensaje] = useState('')

    const AlertWrapper = {
        show: (titulo = 'Alerta' , mensaje) => {
            setTitulo(titulo)
            setMensaje(mensaje)
            setMostrarAlerta(true)
        },
        hide: () => {setMostrarAlerta(false)}
    }

    return (
        <AlertContext.Provider value={AlertWrapper}>
            { children }
            <Alert mostrarAlerta={mostrarAlerta} titulo={titulo} mensaje={mensaje} setMostrarAlerta={setMostrarAlerta} />
        </AlertContext.Provider>
    )

}

export default AlertProvider