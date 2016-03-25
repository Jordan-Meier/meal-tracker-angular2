import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
// import { MealComponent } from './meal.component';
// import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';

@Component  ({
  selector: 'keg-list',
  inputs: ['mealList'],
  directives: [NewMealComponent],
  template: `
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];

  constructor () {}

  createMeal(mealArray:any[]): void {
    var newMeal: Meal = new Meal(mealArray[0], mealArray[1], mealArray[2]);
    this.mealList.push(newMeal);
  }
}
