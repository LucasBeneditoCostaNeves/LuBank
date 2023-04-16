import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { CreateContextGenerico } from '../../context/fullcontext'
import { DivForm } from "./styled"


export const add = (data,setArray,array,setFilter) => {

    const obj = {
        value: data.value,
        description: data.description,
        type: data.type
    }

    setArray([...array,obj])
    setFilter([...array, obj])
}

export const Form = () => {
    const { register, handleSubmit } = useForm()
    const { array, setArray, setFilter } = useContext(CreateContextGenerico)
    
    const onSubmit = (data, event) => {
        event.preventDefault();
        add(data,setArray,array,setFilter);
    };
    
    return(
        <DivForm>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                <label>Descrição</label>
                <input placeholder="Digite aqui sua descrição" {...register("description")} required="true"/>
                <label className="little-label">Ex: Compra de Roupas</label>
                <label>Valor (R$)</label>
                <input type={"number"} min="1" {...register("value")} required="true"/>
                <label>Tipo do Valor:</label>
                <select  placeholder='0zxxzx' {...register("type")}>
                    <option value="Entrada">Entrada</option>
                    <option value="Saída">Saída</option>
                </select>
                <button className="button" type='submit'>Inserir Valor</button>
            </form>
        </DivForm>
    )
}