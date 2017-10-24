import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Recipe List</h1>
      <div *ngFor='let currentRecipe of recipes'>
        <h3>{{currentRecipe.title}} <button (click)="editRecipe(currentRecipe)">Edit!</button></h3>

        <div *ngFor='let currentIngredient of currentRecipe.ingredients'>
          <h4>{{currentIngredient}}</h4>
        </div>
        <h4>Instructions: {{currentRecipe.instructions}}</h4>
      </div>
      <div *ngIf="selectedRecipe">
      <h3>Enter a new title</h3>
        <input [(ngModel)]="selectedRecipe.title">
        <div *ngFor="let x of selectedRecipe.ingredients; let i = index">
          <input [(ngModel)]="selectedRecipe.ingredients[i]">
        </div>
        <input [(ngModel)]="selectedRecipe.instructions">
        <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Ice Cream', ['Milk', 'Sugar'], 'Pour milk and sugar into bag and put into freezer.'),
    new Recipe('Apple', ['Apple'], 'Eat the Apple'),
    new Recipe('Cereal', ['Cereal', 'Milk'], 'Pour milk over the cereal')
  ];
  selectedRecipe = null;

  editRecipe(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  constructor(public title: string, public ingredients: string[], public instructions: string) {}
}
