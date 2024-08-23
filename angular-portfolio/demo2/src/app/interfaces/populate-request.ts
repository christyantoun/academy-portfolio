export interface IPopulateRequest {
    pageNumber:number;
    pageSize:number;
    filter?: {
        firstName?: string;     
        lastName?: string;     
        email?: string;           
        status?: boolean;       
        courseName?: string;      
     
      };
      sort?: {
        field: string | number;//or i can specify the attributes of IUser so sort accordingly             
        direction: 'asc' | 'desc'; 
      };
      search?: string;             
    }

