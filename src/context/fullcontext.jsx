
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreateContextGenerico = createContext({})

export const GericoProvider = ({children}) => {

    const [number,setNumber] = useState(0)
    const [ array, setArray ] = useState([])
    const [filter,setFilter] = useState([1])
    const navigate = useNavigate()
    return(

        <CreateContextGenerico.Provider value={{number,setNumber,array,setArray,filter,setFilter,navigate}}>
            {children}
        </CreateContextGenerico.Provider>
    )
}