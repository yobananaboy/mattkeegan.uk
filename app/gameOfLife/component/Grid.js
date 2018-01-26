import React, { Component } from 'react';
import { Row } from './Row'; 

export const Grid = (props) => {
  var rows = props.grid.map((data, index) => {
    return <Row
             key={`row${index}`}
             data={data}
             index={index}
             size={props.size}
             onClick={props.onClick}
             />;
  });
  return(
    <div className='row justify-content-center'>
      <div className='col-12 col-md-6 col-lg-4'>
        <table>
          {rows}      
        </table>
      </div>
    </div>
  );
};