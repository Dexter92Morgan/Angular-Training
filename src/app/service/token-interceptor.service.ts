import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHeaders,
  HttpHandler,
  HttpEvent
} from '@angular/common/http/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiI5MmJmMTM4MS02MGZjLTQ4ODMtODAyNC1hODE4NTg0Mjg1ZDAiLCJpYXQiOiIwOC0wMy0yMDIzIDEyOjE1OjQ5IiwiVXNlcklkIjoiMSIsIlVzZXJOYW1lIjoiUHJlZXRoYW0iLCJQYXNzd29yZCI6IjEyMzQ1IiwiZXhwIjoxNjc4Mjc4MzQ5LCJpc3MiOiJKV1RBdXRoZW50aWNhdGlvblNlcnZlciIsImF1ZCI6IkpXVFNlcnZpY2VQb3N0bWFuQ2xpZW50In0.DGZzd7FmVJK5235w2BK-_XZwGrn8ojL8nzKR6O8UDYg';
    let jwttoken = req.clone({
      setHeaders: {
        Authorization: 'bearer ' + token
      }
    })
    return next.handle(jwttoken);
  }
}
