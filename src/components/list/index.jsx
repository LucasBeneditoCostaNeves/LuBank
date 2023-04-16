import { useContext } from "react"
import { CreateContextGenerico } from "../../context/fullcontext"
import { Cards } from "../cards"
import { DivList } from "./styled"

export const List = () => {

    const { array, filter, setFilter } = useContext(CreateContextGenerico)

     const functionFilter = (type) => {
        if(type == "Todos"){
            setFilter(array)
        } else{
            const filterArray = array.filter((element) => element.type == type)
            setFilter(filterArray)
            setFilter(filterArray)
        }
    }

    return (
        <DivList>
            <div>
                <h4>Resumo Financeiro</h4>
                <div>
                    <button className="buttonFilter" onClick={() => functionFilter("Todos")}>Todos</button>
                    <button className="buttonFilter" onClick={() => functionFilter("Entrada")}>Entrada</button>
                    <button className="buttonFilter" onClick={() => functionFilter("Saída")}>Saída</button>
                </div>
            </div>
            <ul>
                {filter[0] == 1  ? (array.map((element) => Cards(element.value,element.description,element.type))) : (filter.map((element) => Cards(element.value,element.description,element.type)))}
            </ul>
        </DivList>
      )
}