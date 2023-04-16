import styled from "styled-components";

export const LiCards = styled.li`
  width: 90%;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: var(--cinza-2);
  border-radius: 4px;
  .type {
    display: flex;
  }

  .Saída {
    border-left: 4px solid #ff4646;
    border-radius: 3px;
    padding: 14px 10px;
  }

  .Entrada {
    border-left: 4px solid rgb(23, 204, 23);
    border-radius: 3px;
    padding: 14px 10px;
  }

  .margin-bottom {
    margin-bottom: 10px;
    font-size: larger;
    font-weight: 700;
    font-family: system-ui; 
  }

  button{
    border: none;
    padding: 4px 6px;
    border-radius: 4px;
    color: var(--branco);
    background: rgb(126 0 0);
  }
`;
