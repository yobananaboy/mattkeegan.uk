const calculator_controller = require('./calculator/calculatorController');
const game_of_life_controller = require('./gameOfLife/gameOfLifeController');

module.exports = function(app) {
    app.get('/calculator', calculator_controller.get_calculator);
    
    app.get('/game-of-life', game_of_life_controller.get_game);
};