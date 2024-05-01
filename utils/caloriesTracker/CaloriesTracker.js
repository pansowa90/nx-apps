"use strict";
exports.__esModule = true;
// SOLID Design Principles: single responsibility example
// in cli:
// start typescritp code using npx ts-code 
// or generate vanilla js using tsc then start by node
var LoggerModule_1 = require("./LoggerModule");
var CaloriesTracker = /** @class */ (function () {
    function CaloriesTracker(maxCalories) {
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }
    CaloriesTracker.prototype.trackCalories = function (calories) {
        this.currentCalories += calories;
        if (this.currentCalories > this.maxCalories) {
            (0, LoggerModule_1["default"])('Max calories exceeded!!');
        }
    };
    return CaloriesTracker;
}());
var caloriesTracker = new CaloriesTracker(2000);
caloriesTracker.trackCalories(1000);
caloriesTracker.trackCalories(300);
caloriesTracker.trackCalories(900);
