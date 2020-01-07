import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test', 'https://www.gstatic.com/webp/gallery3/1.png'),
    new Recipe('Another Test Recipe', 'This is a test', 'https://www.gstatic.com/webp/gallery3/1.png')
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  
  onRecipeSelected(recipeEl: Recipe){
    this.recipeWasSelected.emit(recipeEl);
  }
  constructor() { }

  ngOnInit() {
  }

}
