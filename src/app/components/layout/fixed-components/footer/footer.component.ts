import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  successSub:boolean = false;

  emailList: any = []

  constructor(private afs: AngularFirestore) { }

  ngOnInit(): void {
  }

  

  onSubmit(form: NgForm){
    const newEmail = {email: form.value.email};
    this.afs.collection('subscriptions').add(newEmail);
    this.successSub = true;
  }

}
