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

  ngOnInit(): void {
  }

  onSubmit(form : NgForm){
    if(form.invalid){
      return console.log('input is invalid');
    }
    const email = form.value.email;
    const password = form.value.password;

    this.authService.signUp(email, password).subscribe(res => {
      
      this.router.navigate(['/shopfor']);
    }, err => {
      console.log(err);
    })
  }

}
