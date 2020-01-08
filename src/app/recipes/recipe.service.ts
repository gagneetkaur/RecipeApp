import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService{
  recipeSelected = new EventEmitter<string>();
    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is a test', 'https://www.gstatic.com/webp/gallery3/1.png'),
        new Recipe('Another Test Recipe', 'This is a test', 'https://www.gstatic.com/webp/gallery3/1.png')
      ];

      getRecipes(){
        return this.recipes.slice();
      }
}