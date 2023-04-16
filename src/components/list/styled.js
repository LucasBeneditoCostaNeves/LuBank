import styled from "styled-components";

export const DivList = styled.div`
  width: 82%;
  margin: 0px auto 40px auto;
  padding: 22px 0px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: var(--branco);
  background: var(--cinza-3);
  margin-top: 20px;
  border-radius: 4px;
  max-width: 590px;

  .buttonFilter {
    margin-right: 8px;
    box-shadow: inset 0px 1px 0px 0px var(--second-color);
    background-color: var(--main-color);
    border-radius: 4px;
    border: 1px solid var(--second-color);
    display: inline-block;
    cursor: pointer;
    color: rgb(255, 255, 255);
    font-family: Arial;
    font-size: 16px;
    font-weight: normal;
    padding: 6px 10px;
    text-decoration: none;
    text-shadow: 0px 1px 0px var(--second-color);
    margin-top: 5px;
  }

  h4 {
    font-size: 22px;
    font-weight: 700;
    color: var(--main-color);
  }
`;
