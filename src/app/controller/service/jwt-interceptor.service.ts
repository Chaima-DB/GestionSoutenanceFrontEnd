import { Injectable } from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {JwtClientService} from "./jwt-client.service";

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements  HttpInterceptor{

  constructor(private jwtClientService: JwtClientService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let tokenClonedRequest = req;
    const token = this.jwtClientService.getToken();
    if (token != null) {
      tokenClonedRequest = req.clone({
        headers : req.headers.set("Authorization", "Bearer "+ token)
      });
    }
    return next.handle(tokenClonedRequest);
  }
}
