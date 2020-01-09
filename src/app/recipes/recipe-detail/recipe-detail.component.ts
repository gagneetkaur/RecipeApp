import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe.model';
import {DropDownDirective} from '../../shared/dropdown.directive';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private slService: ShoppingListService) { } 

  ngOnInit() {
  }
  pushToShoppingList(){
    for(let i = 0; i < this.recipe.Ingredients.length; i++){
        this.slService.addIngredient(this.recipe.Ingredients[i]);
    }
  }

}
