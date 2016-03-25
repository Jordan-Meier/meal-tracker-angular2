import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['mealToEdit'],
  template: `
    <div class="meal-form">
      <h3>Edit Meal Details:</h3>
      <input [(ngModel)]="mealToEdit.name" class="col-sm-8 input-lg meal-form"/>
      <input [(ngModel)]="mealToEdit.details" class="col-sm-8 input-lg meal-form"/>
      <input type="number" min="0" [(ngModel)]="mealToEdit.calories" class="col-sm-8 input-lg meal-form"/>
    </div>
  `
})

export class EditMealComponent {
  public mealToEdit: Meal;
}
