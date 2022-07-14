import { useState } from 'react'
import { VscTriangleRight } from "react-icons/vsc";
import { Menu, SucursalDiv, SucursalLabel, ButtonMenu, SucursalCheck, IconMenu, MenuDesplegable, TableContent, Table, TableHead, TableCeld, TableCeldId } from './style';
import {Test} from "./test"
function App() {

  const sucursales = [
    { id: 1, name: 'Regional 1' },
    { id: 2, name: 'Sucursal 2' },
    { id: 3, name: 'Regional 3' },
    { id: 4, name: 'Regional 4' },
    { id: 5, name: 'Regional 5' }
  ]

  const [clicked, setClicked] = useState(false);
  const click = () => {setClicked(!clicked); };
  const [sucurs, setsucurs] = useState<any>([]);

  const [estado, setEstado] = useState(false)
  //const [sucursUpdate, setsucursUpdate] = useState<any>([...sucurs])

  const getIdSucursalChecked = (sucursalId: number, sucursalName: string) => {

    if (!sucurs.some((sucursal:{sucursalId: number, sucursalName: string}) => sucursal.sucursalId === sucursalId)) {
      setsucurs([...sucurs, { sucursalId, sucursalName }]);
    }
    else {
      if (sucurs.length > 0) {
        setsucurs(sucurs.filter((sucursal: any) => sucursal.sucursalId !== sucursalId));
      }
      else {
        setsucurs([])
      }
    }
    
  }



  const saludar = () =>{
    console.log('Desde funcion saludar');
  }
  //const  Ascending = [...sucurs].sort((a, b) => a.sucursalId - b.sucursalId);
  return (

    <div>
        <Test></Test>
      <Menu>
        <ButtonMenu onClick={click}>

          <IconMenu clicked={clicked}>

            <VscTriangleRight />

          </IconMenu>

          Divisional

        </ButtonMenu>

        {clicked && <MenuDesplegable>

          {sucursales.map((sucursal) => {

            return <SucursalDiv key={sucursal.id}>

              <SucursalCheck type="checkbox" onClick={() => {getIdSucursalChecked(sucursal.id, sucursal.name); saludar()}} />

              <SucursalLabel>{sucursal.name}</SucursalLabel>

            </SucursalDiv>
          })}

        </MenuDesplegable>}

      </Menu>

      <h1>Sucursales activas</h1>

      <TableContent>

        <Table>

          <TableHead>Id</TableHead>
          <TableHead>Nombre</TableHead>

          {[...sucurs].sort((a,b) => a.sucursalId - b.sucursalId).map((sucursal: {sucursalId: number, sucursalName: string}) => {

            return <><TableCeldId key={sucursal.sucursalId}>{sucursal.sucursalId}</TableCeldId>
            <TableCeld key={sucursal.sucursalName}>{sucursal.sucursalName}</TableCeld></>
          })}

        </Table>
      </TableContent>

    </div>

  );
}
/*onclick, push, filter, .some, find, Sintaxis spread*/

export default App;