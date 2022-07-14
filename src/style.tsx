
import styled from "styled-components";

export const Menu = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
background-color: #f7fff0;
width: 25vh;
padding: 2%;
row-gap: 10px;

`;
export const ButtonMenu = styled.button`
  display: flex;
  justify-content: space-around;
  background: transparent;
  width: 80%;
  border: none;
  padding: 0.25em 0.25em;
  font-family: "Trebuchet MS";
  font-size: medium;
  color: #97a38d;
  
  `;

export const MenuDesplegable = styled.div `
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 1%;
  row-gap: 1.2em;
 
  
`;

export const SucursalDiv = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
width: 100px;
`;

export const SucursalCheck = styled.input`

/* appearance: none;
-webkit-appearance: none;
display: flex;
justify-content: center;
border-top: solid transparent 6px;
border-left: solid #97a38d 6px;
border-right: solid transparent 6px;
border-bottom: solid transparent 6px;
margin: 0px;

&:checked{
    content: '';
    color: white;
    display: flex;
    border: solid 1px #ccfdab;
    background-color: #ccfdab;
    border-radius: 3px;
    width: 15px;
    height: 15px;
    margin: 0;

} */
`;

export const SucursalLabel = styled.label`

font-family: "Trebuchet MS";
color: #97a38d;
cursor: pointer;


`;

export const IconMenu = styled.div <{ clicked: boolean }>`
  font-size: medium;
  color: #97a38d;
  transform: rotate(${({ clicked }) => (clicked ? `90deg` : '')});
  
`;

export const TableContent = styled.div`

  background-color: 97a38d;
  display: grid;
  display: flex;
  padding: 50px;
  justify-content: center;
  align-items: center;
  background-color: #f7fff0;
  color: #97a38d;
`;

export const Table = styled.div`

display: grid;
grid-template-columns: 1fr 4fr;
min-width: 80%;

`

export const TableCeld = styled.div`
  border-bottom: 1px solid #97a38d;
  padding: 10px;
  text-align: center;

`;

export const TableCeldId = styled.div`
  border-bottom: 1px solid #97a38d;
  padding: 10px;
  text-align: center;
  &:nth-of-type(4n - 1){
    color: red;
  }
  &:nth-of-type(4n + 1){
    color: #8bda8b;
  }
`;

export const TableHead = styled.div`
  border-bottom: 1px solid #97a38d;
  padding: 10px;
  text-align: center;
  font-weight:bold;
  
`;