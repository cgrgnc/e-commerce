import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { v4 as uuid } from 'uuid';
import {environment} from "../../environments/environment";

interface AuthResponse{
  idToken: string;
  email: string;
  refreshToken: string;
  expiresln: string;
  localid: string;
  registered? : boolean;
}

@Injectable({
  providedIn: 'root'
})


export class AuthService {

  
  // apiKey = this.hidden.apiKey;
  
  
  // urlLogIn = this.hidden.urlLogIn;
  apiKey = environment.apiKey;
  
  
  urlLogIn = environment.urlLogIn;

  
  // url = this.hidden.url;
  url = environment.url;

  user = new BehaviorSubject<User>(null);
  

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string){
    
    return this.http.post<AuthResponse>(this.url, {email: email, password: password, returnSecureToken: true}).pipe(tap((response:any) => {
      this.handleAuthentication(response.email, response.userId, response.idToken, +response.expiresln)
    }))
  }

  logIn(email: string, password: string){
    
    return this.http.post<AuthResponse>(this.urlLogIn, {email: email, password: password, returnSecureToken: true}).pipe(tap((response:any) => {
      this.handleAuthentication(response.email, response.localid, response.idToken, +response.expiresln)
    }))
  }

  autoLogin(){
    const user = JSON.parse(localStorage.getItem("user"));
    if(!user){
      return;
    }
    const loadedUser = new User(
      user.email,
      user.id = "2",
      user._token,
      new Date(user._tokenExpirationDate)
    )

    if(loadedUser.token==null){
      this.user.next(loadedUser);
    }
  }

  handleAuthentication(email:string, userId: string, token:string, expiresln: number){
    const expirationDate = new Date(new Date().getTime() + (expiresln * 1000));
      const user = new User(
        email,
        userId,
        token,
        expirationDate
      );

      this.user.next(user);
      localStorage.setItem('user', JSON.stringify(user));
  }

  logOut(){
    this.user.next(null);
    localStorage.removeItem('user');
  }
  isLoggedIn(){
    return localStorage.getItem("user");
  }

  
}
