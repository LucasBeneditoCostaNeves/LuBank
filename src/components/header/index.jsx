import { useContext } from "react";
import { CreateContextGenerico } from "../../context/fullcontext";
import { DivHeader } from "./styled"

export const HeaderPage = () =>{
    const { navigate } = useContext(CreateContextGenerico);
    return(
        <DivHeader>
            <div className="box-title">
                <h1 className="lu">Lu</h1>
                <h1 className="bank">Bank</h1>
            </div>
            <button onClick={() => navigate("/")}>Sair</button>
        </DivHeader>
    )
}