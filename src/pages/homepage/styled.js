import styled from "styled-components";

export const DivStyled = styled.div`
  position: absolute;
  top: 42%;
  transform: translateY(-50%);

  .div-inicial {
    width: 161px;
  }

  .flex {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    margin-bottom: 5px;
  }

  .preto {
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
  }

  .img-inicial {
    width: 49%;
    max-width: 450px;
  }

  .h2-azul {
    color: var(--main-color);
    font-weight: 900;
    font-size: 27px;
  }

  .h2-branco {
    color: var(--branco);
    font-weight: 900;
    font-size: 27px;
  }

  .texto-inicial {
    width: 184px;
    font-weight: 800;
    font-size: 15px;
    color: var(--branco);
  }

  .descricao-inicial {
    font-weight: 400;
    font-size: 16px;

    color: var(--branco);
  }

  .botao-inicial {
    width: 185px;
    padding: 10px;
    color: var(--branco);
    background-color: var(--main-color);
    border: none;
    border-radius: 6px;
    margin-top: 15px;
  }

  @media (min-width: 400px) {
    width: 100%;
    display: flex;
    justify-content: center;
    .preto {
      justify-content: space-around;
      left: 50%;
      flex-direction: row-reverse;
      width: 80%;
    }

    .div-inicial {
      width: max-content;
    }

    .h2-azul {
      font-size: 50px;
    }

    .h2-branco {
      font-size: 47px;
    }

    .texto-inicial {
      width: 200px;
      font-weight: 800;
      font-size: 17px;
    }
  }

  @media (min-width: 900px) {
    .h2-azul {
      font-size: 80px;
    }

    .h2-branco {
      font-size: 72px;
    }

    .texto-inicial {
      width: 302px;
      font-weight: 800;
      font-size: 26px;
    }

    button {
      width: 100%;
      padding: 15px 0px;
      font-size: 22px;
    }
  }
`;

// width: 56%;
// max-width: 450px;
// margin-left: 4px;
