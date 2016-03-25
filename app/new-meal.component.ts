import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>Log a Meal:</h3>
      <input placeholder="Meal Name" class='col-sm-8 input lg' #newName>
      <input placeholder="Meal Details" class='col-sm-8 input lg' #newDetails>
      <input placeholder="Calories" class='col-sm-8 input lg' #newCalories>
      <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add Meal</button>
    </div>

  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<any[]>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    var mealArray: any[] = [userName.value, userDetails.value, userCalories.value]
    this.onSubmitNewMeal.emit(mealArray);
    userName.value = "";
    userDetails.value = "";
    userCalories.value = "";
  }
}
