import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { IProject } from '../../interfaces/project';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  projects:IProject[]=[];

  constructor(private projectService:ProjectService){};

  ngOnInit(): void {
    this.projectService.getProjects().subscribe(
      {
        next:value =>this.projects=value,
    });
  }

}
