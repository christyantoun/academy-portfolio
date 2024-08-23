export interface IProject {
    id:number;
    name:string;
    categoryId:number[];
    status:"in-progress" | "completed" | "not-started";
    imageUrl:string;
}
