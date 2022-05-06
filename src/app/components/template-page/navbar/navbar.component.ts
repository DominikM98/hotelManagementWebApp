import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  todayDate : Date = new Date();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  logout():void{
    this.router.navigate(['']);
    localStorage.setItem('user_role','');
  }

}
