import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  inputs: ['mealToEdit'],
  template: `
    <div class="edit-meal-form">
      <h3>Edit Meal Details:</h3>
      <input [(ngModel)]="mealToEdit.name" class="input-lg"/><br>
      <textarea [(ngModel)]="mealToEdit.details" class=" input-lg" rows="2"></textarea><br>
      <input type="number" min="0" [(ngModel)]="mealToEdit.calories" class=" input-lg"/>
    </div>
  `
})

export class EditMealComponent {
  public mealToEdit: Meal;
}
