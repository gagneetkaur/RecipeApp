import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Recipe} from '../recipe.model';
import {DropDownDirective} from '../../shared/dropdown.directive';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;
  constructor(private router: Router, private slService: ShoppingListService, private route: ActivatedRoute, private recipeService: RecipeService) { } 

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
    })
  }
  pushToShoppingList(){
    this.slService.addIngredients(this.recipe.Ingredients);
  }
  onEditRecipe(){
    //this.router.navigate(['edit'] , {relativeTo: this.route});
    this.router.navigate(['../', this.id, 'edit'] , {relativeTo: this.route});
  }
}
