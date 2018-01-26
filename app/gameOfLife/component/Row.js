import React, { Component } from 'react';
import { Cell } from './Cell';

export const Row = (props) => {
    var cells = props.data.map((cell, index) => {
      return <Cell
               key={`row${props.index}cell${index}`} 
               data={cell}
               rowIndex={props.index}
               cellIndex={index}
               size={props.size}
               onClick={props.onClick}
               />;
    });
    return(
      <tr key={`tr${props.index}`} id={props.index}>
        {cells}
      </tr>
    );
};