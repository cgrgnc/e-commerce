import { Component, OnChanges, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private authService: AuthService) {
    
  }
  loading_bar = true;
  

  ngOnInit() {
    const timeout = setTimeout(()=>{
      this.loading_bar = false;
    },500)
  }

}
