import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IProject} from "../interfaces/project";
import {ICategory} from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private _httpClient: HttpClient) {
  }

  getCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>('https://my-json-server.typicode.com/christyantoun/frontend-session/categories')
  }

  //** we are no longer using the below because gettingFilteredProducts does the same thing except it has the optional filter being passed into it
  getProjects(): Observable<Array<IProject>> {
    return this._httpClient.get<IProject[]>('https://my-json-server.typicode.com/christyantoun/frontend-session/projects')
  }

  //TODO Homework convert any into the right interface
  getFilteredProject(filters?: any): Observable<IProject[]> {
    return this._httpClient.get<IProject[]>('https://my-json-server.typicode.com/christyantoun/frontend-session/projects',
      {
        params: {
          categoryIds: filters ?? []
        }
      });
  }
}
