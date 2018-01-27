import React, { Component } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { MainControls } from './MainControls';
import { SubControls } from './SubControls';
import { Grid } from './Grid';
import { BackToHomeNav } from '../../shared/component/BackToHomeNav';

class GameOfLifeApp extends Component {
  constructor(props) {
    super(props);
    var length = 50;
    var emptyGrid = this.createEmptyGrid(length);
    this.state = {
      emptyGrid: emptyGrid,
      grid: this.randomlyPopulateGrid(emptyGrid),
      play: true,
      stop: false,
      randomGrid: [],
      size: length,
      speed: 'fast',
      count: 0,
      buttonHighlight: ['run', 'smallSize', 'fast']
    };
    this.createEmptyGrid = this.createEmptyGrid.bind(this);
    this.randomlyPopulateGrid = this.randomlyPopulateGrid.bind(this);
    this.buttonPress = this.buttonPress.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.playGame = this.playGame.bind(this);
    this.cellClick = this.cellClick.bind(this);
    this.playGame();
  }
  
  createEmptyGrid(length) {
    var emptyArray = [];
    for (var i = 0; i < length; i++) {
      emptyArray.push([]);
      for (var j = 0; j < length; j++) {
        emptyArray[i].push(false);
      }
    }
    return emptyArray;
  }
  
  randomlyPopulateGrid(grid) {
    var newGrid = grid.map(subarray => subarray.map(item => {
        var randomBoolean = Math.random() >= 0.5;
        return randomBoolean;
      })
    );
    return newGrid;
  }
  
  handleClick(e) {
    if(e.target.id === 'run' && this.state.play === false) {
      this.setState({
        play: true,
        stop: false
      },
      this.playGame);
    }
    if(e.target.id === 'pause') {
      this.setState({
        play: false
      });
    }
    if(e.target.id === 'clear') {
      this.setState({
        play: false,
        stop: true,
        grid: this.state.emptyGrid,
        count: 0
      });
      console.log(this.state.emptyGrid);
      this.forceUpdate();
    }
    if(e.target.id === 'random') {
      this.setState({
        play: false,
        stop: true,
        count: 0,
        grid: this.randomlyPopulateGrid(this.state.grid)
      });
    }
    if(e.target.id === 'smallSize') {
      this.setState({
        play: false,
        stop: true,
        count: 0,
        emptyGrid: this.createEmptyGrid(50),
        grid: this.randomlyPopulateGrid(this.createEmptyGrid(50)),
        size: 50
      });
    }
    if(e.target.id === 'mediumSize') {
      this.setState({
        play: false,
        stop: true,
        count: 0,
        emptyGrid: this.createEmptyGrid(80),
        grid: this.randomlyPopulateGrid(this.createEmptyGrid(80)),
        size: 80
      });
    }
    if(e.target.id === 'largeSize') {
      this.setState({
        play: false,
        stop: true,
        count: 0,
        emptyGrid: this.createEmptyGrid(100),
        grid: this.randomlyPopulateGrid(this.createEmptyGrid(100)),
        size: 100
      });
    }
    if(e.target.id === 'slow') {
      this.setState({speed: 'slow'});
    }
    if(e.target.id === 'medium') {
      this.setState({speed: 'medium'});
    }
    if(e.target.id === 'fast') {
      this.setState({speed: 'fast'});
    }
    if(e.target.type === 'button') {
      this.buttonPress(e.target.className, e.target.id);
    }
  }
  
  buttonPress(targetClass, targetId) {
    var group;
    if(targetClass.endsWith('main-button')) {
      group = 0;
    }
    if(targetClass.endsWith('sub-1')){
      group = 1;
      var buttons = this.state.buttonHighlight;
      buttons[0] = '';
      this.setState({
        buttonHighlight: buttons
      });
    }
    if(targetClass.endsWith('sub-2')) {
      group = 2;
    }
    var buttonArr = this.state.buttonHighlight;
    buttonArr[group] = targetId;
    this.setState({
      buttonHighlight: buttonArr
    });
  }
  
  playGame() {
    if(this.state.play) {
      var speed = 1000;
        if(this.state.speed === 'medium') {
          speed = 300;
        }
        if(this.state.speed === 'fast') {
          speed = 50;
        }
        setTimeout(() => {
          if(this.state.play) {
          var newGrid = [];
          for(var i = 0; i < this.state.size; i++) {
            newGrid.push([]);
            for(var j = 0; j < this.state.size; j++) {
              var count = 0;
              if(i > 1 && j > 1) {
                if(this.state.grid[i - 1][j - 1]) {
                  count++;
                } 
              }
              if(i > 1) {
                if(this.state.grid[i - 1][j]) {
                  count++;
                }
              }
              if(i > 1 && j < this.state.size - 1) {
                if(this.state.grid[i - 1][j + 1]) {
                  count++;
                }
              }
              if(j > 1) {
                if(this.state.grid[i][j - 1]) {
                  count++;
                }         
              }
              if(j < this.state.size - 1) {
                if(this.state.grid[i][j + 1]) {
                  count++;
                }               
              }
              if(i < this.state.size - 1 && j > 1) {
                if(this.state.grid[i + 1][j - 1]) {
                  count++;
                }
              }
              if(i < this.state.size - 1) {
                if(this.state.grid[i + 1][j]){
                  count++;
                }               
              }
              if(i < this.state.size - 1 && j < this.state.size - 1) {
                if(this.state.grid[i + 1][j + 1]){
                  count++;
                }
              }
              // If cell is alive
              if(this.state.grid[i][j]){
                if(count < 2) {
                  newGrid[i].push(false);
                }
                if(count === 2 | count === 3) {
                  newGrid[i].push(true);
                }
                if(count > 3) {
                  newGrid[i].push(false);
                }
              }
              // If cell is dead
              if(!this.state.grid[i][j]) {
                if(count === 3) {
                  newGrid[i].push(true);
                } else {
                  newGrid[i].push(false);
                }
              }
            }
          }
            this.setState({
            grid: newGrid,
            count: this.state.count + 1
          });
          this.playGame();  
          }
        }, speed);
    } else if(this.state.stop && !this.state.randomize) {
      this.setState({
        play: false,
        stop: true,
        count: 0,
        grid: this.state.emptyGrid,
        randomGrid: []
      });
    }
}
  
  cellClick(e) {
    var target = e.target.id;
    target = target.split(',');
    target = target.map(item => {
      return parseInt(item, 10);
    });
    var data = this.state.grid;
    data[target[0]][target[1]] = !data[target[0]][target[1]];
    this.setState({
      grid: data,
      emptyGrid: this.createEmptyGrid(this.state.size)
    });
  }
  
  render(){
    var size;
    if(this.state.size === 50) {
      size = 'smallCell';
    }
    if(this.state.size === 80) {
      size = 'mediumCell';
    }
    if(this.state.size === 100) {
      size = 'largeCell';
    }
    return(
        <div className='container-fluid'>
          <BackToHomeNav id="game-of-life" />
          <div className='row'>
             <Header />
          </div>
            <MainControls
              count={this.state.count}
              onClick={this.handleClick}
              buttonHighlight={this.state.buttonHighlight}
              />
          <Grid
            grid={this.state.grid}
            size={size}
            onClick={this.cellClick}
            />
          <SubControls
            onClick={this.handleClick}
            buttonHighlight={this.state.buttonHighlight}
            />
          <Footer />
        </div>
    );
  }
}

export default GameOfLifeApp;