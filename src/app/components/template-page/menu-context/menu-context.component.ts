import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-context',
  templateUrl: './menu-context.component.html',
  styleUrls: ['./menu-context.component.scss']
})
export class MenuContextComponent implements OnInit {

  ls: string | null = '';
  constructor() { }

  ngOnInit(): void {

    this.ls = localStorage.getItem('user_role')
  }

}
