import React, { Component } from 'react'
import uuidv1 from  'uuid/v1';

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
           return <td key={uuidv1()}>{row[column]}</td>; })}
       </tr>); });
   return (
     <div>
       <h3>{this.props.name}</h3>
       <table className="table table-bordered table-hover" width="100%">
         {tableHeaders}
         <tbody>
         {tableBody}
         </tbody>
        </table>
      </div>
     )
  }
}

export default Table
