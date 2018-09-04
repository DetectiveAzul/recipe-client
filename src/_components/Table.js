import React, { Component } from 'react'
import uuidv1 from  'uuid/v1';
<<<<<<< HEAD
import {TableWrapper, TitleWrapper} from './styles/TableStyle.js'
=======
//Style
import {
  TableHeader, TableRow, TableContainer
} from './styles/TableStyle.js';
>>>>>>> 1211413b1ae14e8d2e054650425046e0cd500afe

class Table extends Component{

  render(){
    var dataColumns = this.props.data.columns;
    var dataRows = this.props.data.rows;

    var tableHeaders = (<thead key={uuidv1()}>
         <tr key={uuidv1()}>
           {dataColumns.map(function(column) {
             return <th key={uuidv1()}>{column}</th>; })}
         </tr>
     </thead>);

   var tableBody = dataRows.map(function(row) {
     return (
       <tr key={uuidv1()}>
         {dataColumns.map(function(column) {
           return <TableRow key={uuidv1()}>{row[column]}</TableRow>; })}
       </tr>); });
   return (
     <div>
<<<<<<< HEAD
        <TitleWrapper>
         <h3>{this.props.name}</h3>
        </TitleWrapper>
         <TableWrapper>
         <table className="table table-bordered table-hover" width="100%">
           {tableHeaders}
           <tbody>
           {tableBody}
           </tbody>
          </table>
        </TableWrapper>
=======
       <TableHeader>{this.props.name}</TableHeader>
       <TableContainer>
       <table className="table table-bordered table-hover" width="100%">
         {tableHeaders}
         <tbody>
         {tableBody}
         </tbody>
        </table>
      </TableContainer>
>>>>>>> 1211413b1ae14e8d2e054650425046e0cd500afe
      </div>
     )
  }
}

export default Table
