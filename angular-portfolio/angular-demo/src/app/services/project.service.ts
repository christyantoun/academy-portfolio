import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IProject } from '../interfaces/project';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private _httpClient: HttpClient) {}

  getCategories(): Observable<ICategory[]> {
    return this._httpClient.get<ICategory[]>(
      'https://my-json-server.typicode.com/christyantoun/frontend-session/categories'
    );
  }

  //** we are no longer using the below because gettingFilteredProducts does the same thing except it has the optional filter being passed into it
  //** so instead of duplicating so instead of duplicating the code and passing in the filters, we reused  the  same code with an optional paraming the code and passing in the filters, we reused  the  same code with an optional param
  getProjects(): Observable<Array<IProject>> {
    return this._httpClient.get<IProject[]>(
      'https://my-json-server.typicode.com/christyantoun/frontend-session/projects'
    );
  }

  private apiUrl = 'https://my-json-server.typicode.com/christyantoun/frontend-session/projects';

  //TODO ✅ Homework convert any into the right interface

getFilteredProject(filters: {
    categories?: number[];
    statuses?: string[];
  }): Observable<IProject[]> {
    // Prepare parameters for the HTTP request
    let params = new HttpParams();

    if (filters.categories) {
      filters.categories.forEach(categoryId => {
        params = params.append('categoryIds', categoryId.toString());
      });
    }

    if (filters.statuses) {
      filters.statuses.forEach(status => {
        params = params.append('status', status);
      });
    }

    // Construct the final URL with parameters
    const urlWithParams = `${this.apiUrl}?${params.toString()}`;
    console.log('Final URL:', urlWithParams); // Log the final URL

    return this._httpClient.get<IProject[]>(this.apiUrl, { params });
  }


}
