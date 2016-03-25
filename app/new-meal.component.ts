import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
    <div class="meal-form">
      <h3>Log a Meal:</h3>
      <input placeholder="Meal Name" class='form-control input-lg' #newName><br>
      <textarea placeholder="Meal Details" class="form-control input-lg" rows="3" #newDetails></textarea><br>
      <input type="number" min="0" placeholder="Calories" class='form-control input-lg' #newCalories><br>
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
