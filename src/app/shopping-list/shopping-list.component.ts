import { Component, OnInit } from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) { }

  ingredients: Ingredient[];
  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[])=>{
      this.ingredients = ingredients;
    })
  }

  // onIngredientAdded(ingredient: Ingredient){
  //   ingredient.amount = +ingredient.amount;
  //   this.ingredients.push(ingredient);
  // }

}
