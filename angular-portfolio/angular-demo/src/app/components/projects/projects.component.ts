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
  private _projectService = inject(ProjectService);

  ngOnInit(): void {
    this._projectService.getCategories().subscribe({
      next: returnedCategories => {
        this.categories = returnedCategories;
      },
      complete: () => {
        this.getProjects();
      }
    })
  }

  getProjects(filters?: number[]){
    this._projectService.getFilteredProject(filters).subscribe({
      next: (value) => {
        this.projects = value.map(project => ({
          ...project,
          categories: project.categoryIds.map(id =>
            this.categories.find(category => category.id === id)!
          )
        }));
      }
    })
  }

  //TODO Homework create another filter that checks for status
  onSelectChange(selection: ICategory[]) {
    this.getProjects(selection.map(selectionEntry => selectionEntry.id));
  }
}
