import { useContext } from "react";
import { CreateContextGenerico } from "../../context/fullcontext";
import { DivCounter } from "./styled";

export const Counter = () => {
  const { array } = useContext(CreateContextGenerico);
  const positiveValues = array.filter((element) => element.type == "Entrada");
  const negativeValues = array.filter((element) => element.type == "Saída");

  const arrayValuesPositives = positiveValues.map((element) =>
    Number(element.value)
  );
  const arrayValuesNegatives = negativeValues.map((element) =>
    Number(element.value)
  );

  const reducePositive = arrayValuesPositives.reduce(
    (acumulador, valorAtual) => {
      return acumulador + valorAtual;
    },
    0
  );

  const reduceNegative = arrayValuesNegatives.reduce(
    (acumulador, valorAtual) => {
      return acumulador + valorAtual;
    },
    0
  );

  let counter = Number(reducePositive) - Number(reduceNegative);

  if (array.length > 0) {
    return (
      <DivCounter>
        <div className="values">
          <p>Valor Total:</p>
          <p className="pink">R${counter}</p>
        </div>
        <span>O valor se refere ao saldo</span>
      </DivCounter>
    );
  } else {
    return <></>;
  }
};
