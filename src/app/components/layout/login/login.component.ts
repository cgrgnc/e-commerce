import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  onLogin(form: NgForm){
    if(form.invalid){
      return console.log('input is invalid');
    }
    console.log(form.value);
    const email = form.value.email;
    const password = form.value.password;

    this.authService.logIn(email, password).subscribe(res => {
      
      this.router.navigate(['/shopfor']);
    }, err => {
      console.log(err);
    })
  }

}
