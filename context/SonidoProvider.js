import React, { createContext } from "react";
import useSound from 'use-sound';

export const SonidosContext = createContext()

const SonidoProvider = ({children}) =>  {
    const [playbackRate, setPlaybackRate] = React.useState(0.75);
    const[soundTap] = useSound('/public/sounds/tap.mp3', {playbackRate})
    const[soundError] =  useSound('../public/sounds/error.mp3', {playbackRate})
    const[soundGana] =  useSound('../public/sounds/gana.mp3', {playbackRate})

    const SoundWrapper = {
        reproduce: (sound) => {
            if(sound === 'tap'){
                soundTap()
            }else if(sound === 'error'){
                soundError()
            }else if(sound === 'gana'){
                soundGana()
            }
        }
    }

    return(
        <SonidosContext.Provider value={SoundWrapper}>
            {children}
        </SonidosContext.Provider>
    )


}
export default SonidoProvider