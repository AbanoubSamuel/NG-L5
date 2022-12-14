import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/Auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 islogged:boolean 
  constructor( private Auth:AuthService) {
      this.islogged = this.Auth.isLogged()
   }

  ngOnInit(): void {
    this.Auth.getLoggedStatus().subscribe((data)=>{
      this.islogged = data
    })
  }

}
