import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'; 

// export class jwtInterceptor implements HttpInterceptor {
//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const modifiedRequest = request.clone({ 
//       setHeaders: { 'jwt': '123' } 
//     });

//     console.log('Request:', modifiedRequest); 


//     return next.handle(modifiedRequest).pipe(
//       tap(response => console.log('Response:', response))
//     );
//   }
// }


export const jwtInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next:
  HttpHandlerFn) => {
     const userToken = 'MY_TOKEN';
     const modifiedReq = req.clone({
       headers: req.headers.set('Authorization', `Bearer ${userToken}`),
     });
  
     return next(modifiedReq);
  };

