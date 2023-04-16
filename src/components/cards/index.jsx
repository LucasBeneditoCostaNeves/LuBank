import { useContext } from "react";
import { CreateContextGenerico } from "../../context/fullcontext";
import { LiCards } from "./styled";

export const Cards = (value, description, type, functionFilter) => {
  const { array, setArray, setFilter } = useContext(CreateContextGenerico);

  const remove = (description, value) => {
    const deleter = array.filter(
      (element) => element.description !== description
    );
    setArray(deleter);
    setFilter(deleter);
  };

  return (
    <LiCards>
      <div className={type}>
        <h3 className="margin-bottom">{description}</h3>
        <p className="type">{type}</p>
      </div>
      <div>
        <p className="margin-bottom">R${value}</p>
        <button onClick={() => remove(description, value)}>Excluir</button>
      </div>
    </LiCards>
  );
};
