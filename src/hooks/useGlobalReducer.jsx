import { createContext, useContext, useState } from "react";

const StoreContext = createContext() //createContext nos devuelve en el return un objeto con dos elementos del cual usaremos el Provider
                                    //usamos entonces StoreContext.Provider y guardamos dentro de ese elemento otro objeto con los hooks,variables...
                                    //que vayamos a usar en nuestras paginas(children)
export function StoreProvider({children}){
    const [contacts, setContacts]= useState([])
    const [userName, setUserName] = useState("");
    const [idContact,setIdContact] = useState()

    return(
        <StoreContext.Provider value={{contacts,setContacts,userName,setUserName,idContact,setIdContact}}> 
            {children}
        </StoreContext.Provider>
    )
}

//useContext es una funcion que scrapea el objeto que metimos dentro de StoreContext.Provider por lo que al llamar a la funcion useStore obtenemos esos
//objetos listos para ser usados con las respectivas actiualizaciones que se les haya dado

export function useStore(){
    return useContext(StoreContext)
}
