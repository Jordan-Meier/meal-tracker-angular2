import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>Log a Meal:</h3>
      <input placeholder="Meal Name" class='form-control col-sm-8 input lg' #newName>
      <textarea placeholder="Meal Details" class="form-control col-sm-8" rows="3" #newDetails></textarea>
      <input type="number" min="0" placeholder="Calories" class='form-control col-sm-8 input lg' #newCalories>
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
