import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  error_message:any;

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(form.invalid){
      this.error_message="Registeriation is unsuccessful! Email must be valid and password must have more than 6 characters.";
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password).subscribe(res => {
      
      this.router.navigate(['/shopfor']);
    }, err => {
      this.error_message="Registeriation unsuccessful! Email must be valid and password must have more than 6 characters.";
    })
  }

}
