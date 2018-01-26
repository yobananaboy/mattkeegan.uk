import React, { Component } from 'react';

export const MainControls = (props) => {
    return(
    <div className='row justify-content-center'>
      <div className='col-12 main-buttons text-center'>
        <div className='btn-group main-button-group' role='group' aria-label='Basic example'>
          <button type='button' className={`${(props.buttonHighlight[0] === 'run') ? 'active ' : ''}btn btn-secondary main-button`} id='run' onClick={props.onClick}>Run</button>
          <button type='button' className={`${(props.buttonHighlight[0] === 'pause') ? 'active ' : ''}btn btn-secondary main-button`} id='pause' onClick={props.onClick}>Pause</button>
          <button type='button' className={`${(props.buttonHighlight[0] === 'clear') ? 'active ' : ''}btn btn-secondary main-button`} id='clear' onClick={props.onClick}>Clear</button>
          <button type='button' className={`${(props.buttonHighlight[0] === 'random') ? 'active ' : ''}btn btn-secondary main-button`} id='random' onClick={props.onClick}>Random</button>
      </div>
        <h4 className='align-middle'>{`Generation: ${props.count}`}</h4>
      </div>
    </div>
    );
};