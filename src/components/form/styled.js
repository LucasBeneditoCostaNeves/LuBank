import styled from "styled-components";

export const DivForm = styled.div`
  margin-top: 40px;
  border-radius: 8px;
  .form {
    width: 76%;
    max-width: 550px;

    background-color: var(--cinza-3);
    box-shadow: var(--cinza-2) 0px 0px 1px 1px;
    border-radius: 4px;

    margin: 0 auto;
    padding: 20px 20px;
  }

  label {
    display: flex;

    margin: 15px 0px 4px 0px;

    font-size: var(--body-font-size);
    font-weight: 500;
    color: var(--second-color)
  }

  .little-label {
    margin: 2px 0px 0px 0px;

    font-size: 11px;

    color: var(--cinza-1);
  }

  input {
    display: flex;
    width: 98%;
    height: 34px;

    font-size: 14px;
    
    padding: 5px;
    border-width: 1px;
    border-color: var(--cinza-1);
    border-style: solid;
    border-radius: 5px;
    
    background: #efefef;
    color: black;
    
    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.28);
  }

  input:-internal-autofill-selected {
    appearance: menulist-button;
    background-image: none !important;
    background-color: -internal-light-dark(green, pink) !important;
    color: white !important;
}

  select{
    display: flex;

    width: 100%;
    height: 45px;
    
    padding: 10px 0px;

    border: 0px;
    border-radius: 6px;
    background: #efefef;

    box-shadow: 0px 0px 5px rgba(66, 66, 66, 0.28);
  }

  .button {
    display: flex;
    margin: 0 auto;
  }

  .button {
    width: 70%;
    box-shadow: inset 0px 1px 0px 0px var(--second-color);
    background-color: var(--main-color);
    border-radius: 6px;
    border: 1px solid var(--second-color);
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 18px;
    font-weight: normal;
    padding: 14px 20px;
    text-decoration: none;
    text-shadow: 0px 1px 0px var(--second-color);
    margin-top: 20px;
  }

  .button:hover {
    background-color: var(--second-color);
  }
  .button:active {
    position: relative;
    top: 1px;
  }
`;
