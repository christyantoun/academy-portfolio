import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private httpClient:HttpClient) { }

  getProjects():Observable<IProject[]>{
    return this.httpClient.get<IProject[]>("https://my-json-server.typicode.com/christyantoun/frontend-session/projects");
  }
}
