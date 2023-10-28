import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id!: number;
  // false - new recipe
  // true - edit on selected recipe
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          // check if in new mode or edit mode
          // false - new recipe
          // true - edit on selected recipe
          this.editMode = params['id'] != null;
          console.log('Is on edit Mode?',this.editMode);
        }
      );
  }

}
