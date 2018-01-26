import React, { Component } from 'react';

export const Cell = (props) => (
  <td
    id={`${props.rowIndex},${props.cellIndex}`}
    className={`${props.data ? 'alive' : 'dead'} ${props.size}`}
    onClick={props.onClick}
    />
);