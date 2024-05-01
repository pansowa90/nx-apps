// SOLID Design Principles: single reponsibility example
// in cli:
// start typescritp code using npx ts-code 
// or generate vanilla js using tsc then start by node
import LoggerModule from './LoggerModule';

class CaloriesTracker {
  maxCalories: number;
  currentCalories: number;

  constructor(maxCalories: number) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(calories: number) {
    this.currentCalories += calories;

    if (this.currentCalories > this.maxCalories) {
      LoggerModule('Max calories exceeded!!');
    }
  }

  // not here, better option is make module for this
  // logCaloriesSurplus() {
  //   console.log('Max calories exceeded!!');
  // }
}

export { };

const caloriesTracker = new CaloriesTracker(2000);

caloriesTracker.trackCalories(1000);
caloriesTracker.trackCalories(300);
caloriesTracker.trackCalories(900);