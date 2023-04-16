import styled from "styled-components";

export const DivCounter = styled.div`
  color: var(--branco);
  margin-top: 20px;
  width: 76%;
  max-width: 550px;
  margin: 20px auto;
  padding: 20px 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  background: var(--cinza-3);
  .values {
    display: flex;
    justify-content: space-between;
  }

  span {
    display: flex;

    font-size: 13px;

    margin-top: 10px;

  }

  p {
    font-size: 24px;
  }

  .pink {
    color: var(--main-color);
    font-size: larger;
    font-size: 24px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
