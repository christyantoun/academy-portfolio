import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<ICategory[]>
  {
    return this.httpClient.get<ICategory[]>("https://my-json-server.typicode.com/christyantoun/frontend-session/categories");
  }
}
