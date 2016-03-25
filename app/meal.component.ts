import { Component} from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'meal-details',
  inputs: ['meal'],
  template: `
  <div class="meal-info">
  <p>Meal: {{ meal.name }}</p>
  <p>Details: $ {{ meal.details }}.00</p>
  <p>Calories: {{ meal.calories }}</p>

</div>
  `
})

export class MealComponent {
  public meal: Meal;
}
