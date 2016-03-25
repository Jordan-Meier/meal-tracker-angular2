import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealDetailsComponent } from './meal-details.component';
import { EditMealComponent } from './edit-meal.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriesPipe } from './calories.pipe';

@Component  ({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealDetailsComponent, NewMealComponent, EditMealComponent],
  pipes: [CaloriesPipe],
  template: `
    <select (change)="onChangeCalories($event.target.value)" class="select">
      <option value="all">Show All</option>
      <option value="healthy">Show meals under 300 calories</option>
      <option value="unhealthy">Show meals over 300 calories</option>
    </select>


    <div id="meal-list" *ngFor="#currentMeal of mealList | calories:filterCalories">
      <h3 (click)="mealWasSelected(currentMeal)">
        {{ currentMeal.name }}
      </h3>
      <meal-details *ngIf="currentMeal === selectedMeal" [meal]="currentMeal"></meal-details>
    </div>
    <edit-meal *ngIf="selectedMeal" [mealToEdit]="selectedMeal"></edit-meal>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public filterCalories: string = "all";

  constructor () {}

  onChangeCalories(filterOption) {
    this.filterCalories = filterOption;
  }

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
