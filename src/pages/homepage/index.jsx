import React, { useContext } from "react";
import { DivStyled } from "./styled";
import img from "../../asset/illustration.svg"
import { CreateContextGenerico } from "../../context/fullcontext";

export const HomePage = () => {
    const { navigate } = useContext(CreateContextGenerico);
  return (
    <DivStyled>
      <div className="preto">
        <div className="div-inicial">
          <div className="flex">
            <h2 className="h2-azul">Lu</h2>
            <h2 className="h2-branco">Bank</h2>
          </div>
          <h3 className="texto-inicial">
            Centralize o controle das suas finanças
          </h3>
          <button className="botao-inicial" onClick={() => navigate("/dashboard")}>
            Iniciar
          </button>
        </div>
        <img className="img-inicial" src={img} alt="" srcset="" />
      </div>
    </DivStyled>
  );
};
