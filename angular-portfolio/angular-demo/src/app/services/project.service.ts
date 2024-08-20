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
  //** so instead of duplicating so instead of duplicating the code and passing in the filters, we reused  the  same code with an optional paraming the code and passing in the filters, we reused  the  same code with an optional param
  getProjects(): Observable<Array<IProject>> {
    return this._httpClient.get<IProject[]>('https://my-json-server.typicode.com/christyantoun/frontend-session/projects')
  }

  //TODO Homework convert any into the right interface
  getFilteredProject(filters?: any): Observable<IProject[]> {
    //Tip: try adding 'console.log(filters)' here to observe how the data being passed OnInit is different than the data being passed when we have a filter
    return this._httpClient.get<IProject[]>('https://my-json-server.typicode.com/christyantoun/frontend-session/projects',
      {
        params: {
          categoryIds: filters ?? []
        }
      });
  }
}
