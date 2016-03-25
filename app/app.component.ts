import { Component } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="header jumbotron text-center">
    <div class="animate" id="leftCircle"></div>
    <h1>Meal Tracker</h1>
  </div>
  <div class="container">
    <meal-list [mealList]="meals"></meal-list>
  </div>
    `
})

export class AppComponent {
  public meals: Meal[];
  constructor() {
    this.meals = [
      new Meal("Odwalla Juice", "Strawberry C Monster smoothie blended juice", 300),
      new Meal("Eggs and Sausage", "Need some of protein to start the day", 285),
      new Meal("Snack Bar", "A healthy little mid morning snack", 120),
      new Meal("Turkey Sandwich", "Turkey, avocado, mayo, cheese, lettuce", 390),
      new Meal("Pad Thai", "Tasty, tasty Thai food", 750)
    ];
  }
}
