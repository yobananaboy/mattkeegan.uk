import React, { Component } from 'react';
import { renderToString } from 'react-dom/server';

import GameOfLifeApp from '../../../app/gameOfLife/component/GameOfLifeApp';

exports.get_game = (req, res) => {
    const content = renderToString(
            <GameOfLifeApp />
        );
    res.render('game-of-life-index', {title: "Conway's Game of Life", description: "Simulation of Conways Game of Life, built with React.", folderName: 'gameOfLife', content });
};