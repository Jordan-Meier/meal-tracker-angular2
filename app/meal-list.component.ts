import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDetailsComponent } from './meal-details.component';
// import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';

@Component  ({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDetailsComponent, NewMealComponent],
  template: `
    <div id="meal-list" *ngFor="#currentMeal of mealList">
      <h3 (click)="mealWasSelected(currentMeal)">
        {{ currentMeal.name }}
      </h3>
      <meal-details *ngIf="currentMeal === selectedMeal" [meal]="currentMeal"></meal-details>
    </div>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;

  constructor () {}

  mealWasSelected(clickedMeal: Meal): void {
    if(this.selectedMeal === clickedMeal) {
      this.selectedMeal = undefined;
    } else {
      this.selectedMeal = clickedMeal;
    }
  }

  createMeal(mealArray:any[]): void {
    var newMeal: Meal = new Meal(mealArray[0], mealArray[1], mealArray[2]);
    this.mealList.push(newMeal);
  }
}
