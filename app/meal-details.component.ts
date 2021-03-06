import { Component} from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-info">
  <p>Date: {{ meal.date }}</p>
  <p>Meal: {{ meal.name }}</p>
  <p>Details: {{ meal.details }}</p>
  <p>Calories: {{ meal.calories }}</p>

</div>
  `
})

export class MealDetailsComponent {
  public meal: Meal;
}
