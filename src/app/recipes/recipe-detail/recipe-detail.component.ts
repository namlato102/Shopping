import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params, ParamMap } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from 'src/app/shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id!: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          // cast string to a number by adding +
          this.id = +params['id'];
          // retrieve information about a recipe based on "this.id", then assign the value to recipe
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      );

      // this.route.paramMap
      // .subscribe(
      //   (params: ParamMap) => {
      //     // cast string to a number by adding +
      //     if (params.has('id')) {
      //       this.id = +params.get('id')!;
      //       this.recipe = this.recipeService.getRecipe(this.id);
      //     }

      //   }
      // );
  }

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    // on /recipes/:id
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }


}
