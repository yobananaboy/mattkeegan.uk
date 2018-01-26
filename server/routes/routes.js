const calculator_controller = require('./calculator/calculatorController');

module.exports = function(app) {
    app.get('/calculator', calculator_controller.get_calculator);
};