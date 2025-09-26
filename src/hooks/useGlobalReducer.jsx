import { createContext, useContext, useReducer } from "react";
import storeReducer,{initialStore} from "../store"

const StoreContext = createContext() //createContext nos devuelve en el return un objeto con dos elementos del cual usaremos el Provider
                                    //usamos entonces StoreContext.Provider y guardamos dentro de ese elemento otro objeto con los hooks,variables...
                                    //que vayamos a usar en nuestras paginas(children)
export function StoreProvider({children}){
    
    const [store,dispatch] = useReducer(storeReducer,initialStore())
    return(
        <StoreContext.Provider value={{store,dispatch}}> 
            {children}
        </StoreContext.Provider>
    )
}

//useContext es una funcion que scrapea el objeto que metimos dentro de StoreContext.Provider por lo que al llamar a la funcion useStore obtenemos esos
//objetos listos para ser usados con las respectivas actiualizaciones que se les haya dado

export default function useGlobalReducer(){
    const {dispatch,store} = useContext(StoreContext)
    return {dispatch,store}
}
