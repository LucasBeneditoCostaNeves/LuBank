import styled from "styled-components";

export const DivHeader = styled.div`
  box-shadow: black 0px 1px 4px;
  height: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .box-title {
    display: flex;
    align-items: baseline;
    margin-left: 8vw;
    padding: 16px 0px;
  }

  .lu {
    color: var(--main-color);
    font-weight: var(--title-weight-bold);
    font-size: 38px;
    margin-right: 4px;
  }

  .bank {
    color: var(--branco);
    font-weight: var(--title-weight-bold);
    font-size: var(--title-1-font-size);
  }

  button {
    background: var(--main-color);
    border: none;
    width: 75px;
    border-radius: 8px;
    height: 40px;
    color: var(--branco);
    margin-right: 30px;
  }
`;
