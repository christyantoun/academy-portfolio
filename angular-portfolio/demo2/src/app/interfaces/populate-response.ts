import { IUser } from "./user";

export interface PopulateResponse {
    users:IUser[];
    totalRecords:number;
    currentPage:number;
    totalPages:number;
}
