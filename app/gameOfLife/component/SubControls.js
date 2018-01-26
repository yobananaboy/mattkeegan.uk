import React, { Component } from 'react';

export const SubControls = (props) => {
    return(
      <div>
       <div className='row grid-size-controls justify-content-center'>
        <div className='col-12 text-center'>
          <h4 className='align-middle'>Board size:</h4>
        <div className='btn-group sub-top-row' role='group' aria-label='Basic example'>
          <button type='button' className={`${(props.buttonHighlight[1] === 'smallSize') ? 'active ' : ''}btn btn-secondary sub-1`} id='smallSize' onClick={props.onClick}>50 x 50</button>
          <button type='button' className={`${(props.buttonHighlight[1] === 'mediumSize') ? 'active ' : ''}btn btn-secondary sub-1`} id='mediumSize' onClick={props.onClick}>80 x 80</button>
          <button type='button' className={`${(props.buttonHighlight[1] === 'largeSize') ? 'active ' : ''}btn btn-secondary sub-1`} id='largeSize' onClick={props.onClick}>100 x 100</button>
        </div>
      </div>
    </div>
    <div className='row justify-content-center'>
        <div className='col-12 text-center'>
          <h4 className='align-middle'>Speed:</h4>
        <div className='btn-group main-buttons sub-bottom-row' role='group' aria-label='Basic example'>
          <button type='button' className={`${(props.buttonHighlight[2] === 'slow') ? 'active ' : ''}btn btn-secondary sub-2`} id='slow' onClick={props.onClick}>Slow</button>
          <button type='button' className={`${(props.buttonHighlight[2] === 'medium') ? 'active ' : ''}btn btn-secondary sub-2`} id='medium' onClick={props.onClick}>Medium</button>
          <button type='button' className={`${(props.buttonHighlight[2] === 'fast') ? 'active ' : ''}btn btn-secondary sub-2`} id='fast' onClick={props.onClick}>Fast</button>
        </div>
      </div>
    </div>
    </div>
    );
};