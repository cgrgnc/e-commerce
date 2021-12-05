import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
  })

export class Hidden{
    apiKey = "AIzaSyCPoBazzJYQDR_kUMlfSLFNHTrkSYJK3HI";
  
  urlLogIn = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.apiKey;

  url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCPoBazzJYQDR_kUMlfSLFNHTrkSYJK3HI";
}