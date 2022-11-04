const Alert = ({mostrarAlerta, titulo, mensaje,setMostrarAlerta}) =>{
    return(
        <>
        { mostrarAlerta === true &&
        <div className="fixed top-0 right-0 left-0 bg-neutral-900 shadow-lg mx-auto w-96 max-w-full
            text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3" 
            role="alert"
            aria-live="assertive"
            aria-atomic="true">
            <div className="bg-gray-800/50 flex justify-between items-center py-2 px-3 bg-clip-padding
                border-b-2 border-blue-400 rounded-t-lg">
                <p className="font-bold text-white flex items-center">
                    <span className=""><strong className="p-2 text-xs">   </strong></span> { titulo }
                </p>
                <div className="flex items-center">
                    <button type="button"
                    className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white hover:text-white
                        border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100
                        hover:text-white hover:opacity-75 hover:no-underline" data-mdb-dismiss="toast" aria-label="Close"
                        onClick={() => setMostrarAlerta(false)}>
                            x
                    </button>
                </div>
            </div>
            <div className="p-3 bg-neutral-900 rounded-b-lg break-words text-white font-bold">{ mensaje }</div>
        </div>
        }
     </>
    )
}

export default Alert