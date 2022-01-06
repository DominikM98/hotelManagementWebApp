import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  constructor() {

  }

  ngOnInit(): void {
  }

  //btn = document.getElementsByClassName("appetizer");
  isShow = false;
  isAppetizer= false;
  isSoup = false;

  showMenuAppetizer(){
    if (this.isShow === false){
      this.isShow = true;
    }else{
      this.isShow = false;
    }

  }

}
