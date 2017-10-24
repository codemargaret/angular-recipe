"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.recipes = [
            new Recipe('Ice Cream', ['Milk', 'Sugar'], 'Pour milk and sugar into bag and put into freezer.'),
            new Recipe('Apple', ['Apple'], 'Eat the Apple'),
            new Recipe('Cereal', ['Cereal', 'Milk'], 'Pour milk over the cereal')
        ];
        this.selectedRecipe = null;
    }
    AppComponent.prototype.editRecipe = function (clickedRecipe) {
        this.selectedRecipe = clickedRecipe;
    };
    AppComponent.prototype.finishedEditing = function () {
        this.selectedRecipe = null;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'app-root',
        template: "\n    <div class=\"container\">\n      <h1>Recipe List</h1>\n      <div *ngFor='let currentRecipe of recipes'>\n        <h3>{{currentRecipe.title}} <button (click)=\"editRecipe(currentRecipe)\">Edit!</button></h3>\n\n        <div *ngFor='let currentIngredient of currentRecipe.ingredients'>\n          <h4>{{currentIngredient}}</h4>\n        </div>\n        <h4>Instructions: {{currentRecipe.instructions}}</h4>\n      </div>\n      <div *ngIf=\"selectedRecipe\">\n      <h3>Enter a new title</h3>\n        <input [(ngModel)]=\"selectedRecipe.title\">\n        <div *ngFor=\"let x of selectedRecipe.ingredients; let i = index\">\n          <input [(ngModel)]=\"selectedRecipe.ingredients[i]\">\n        </div>\n        <input [(ngModel)]=\"selectedRecipe.instructions\">\n        <button (click)=\"finishedEditing()\">Done</button>\n      </div>\n    </div>\n  "
    })
], AppComponent);
exports.AppComponent = AppComponent;
var Recipe = (function () {
    function Recipe(title, ingredients, instructions) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
    }
    return Recipe;
}());
exports.Recipe = Recipe;
//# sourceMappingURL=app.component.js.map