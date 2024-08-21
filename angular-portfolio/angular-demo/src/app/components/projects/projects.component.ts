import {Component, inject, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {IProject} from "../../interfaces/project";
import {ICategory} from "../../interfaces/category";
import {MultiSelectComponent} from "../multi-select/multi-select.component";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MultiSelectComponent,
    AsyncPipe
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {
  projects: IProject[] = [];
  categories: ICategory[] = [];

  //TODO ✅ pass 'statuses' to the new <multi-select> that you will create
  //** the multi-select component is expecting an @Input of type ICategory[]
  statuses: ICategory[] =[
    { id: 1, name: "completed" },
    { id: 2, name: "in-progress" },
    { id: 3, name: "not-started" }
  ]
  
  selectedCategories: number[] = [];
  selectedStatuses: string[] = [];

  private _projectService = inject(ProjectService);

  ngOnInit(): void {
    //** when the component first mounts, we're getting the categories from the BE
    this._projectService.getCategories().subscribe({
      next: returnedCategories => {
        this.categories = returnedCategories;
      },
      complete: () => {
        //** after successfully fetching the categories we are fetching the projects
        this.getProjects();
      }
    })
  }

  //** we've added the project fetching as its own function so we can reuse it multiple times within the same component
  //** check for when the getProjects( )  function is being used in this file
   
  getProjects(): void {
  const filters = {
    categories: this.selectedCategories,
    statuses: this.selectedStatuses
  };

  this._projectService.getFilteredProject(filters).subscribe({
    next: (value) => {
      this.projects = value.map(project => ({
        ...project,
        categories: project.categoryIds.map(id =>
          this.categories.find(category => category.id === id)!
        )
      }));
    }
  });
}


   onCategorySelectChange(selection: ICategory[]): void {
    this.selectedCategories = selection.map(entry => entry.id);
    this.getProjects();
  }

  onStatusSelectChange(selection: ICategory[]): void {
    this.selectedStatuses = selection.map(entry => entry.name);
    this.getProjects();
  }

}
