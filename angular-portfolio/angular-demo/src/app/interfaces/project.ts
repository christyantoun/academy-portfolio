import {ICategory} from "./category";

export interface IProject {
  id: number;
  name: string;
  imageUrl: string;
  categoryIds: number[];
  categories?: (ICategory)[];
  status: 'not-started' | 'in-progress' | 'completed';
}



export interface IPerson {
  firstname: string;
  lastName: string;
  address: {
    city: string;
    zipCode: number;
  }
}

