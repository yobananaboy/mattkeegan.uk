import React from 'react';
import ReactDOM from 'react-dom';
import GameOfLifeApp from '../../../app/gameOfLife/component/GameOfLifeApp';

import '../css/style.scss';

ReactDOM.render(
    <GameOfLifeApp />,
    document.getElementById('application')
);