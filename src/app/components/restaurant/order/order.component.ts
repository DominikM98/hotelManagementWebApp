import { Component, OnInit } from '@angular/core';
import {ItemMenuService} from "../add-menu-item/add-menu-item.service";

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  providers: [ItemMenuService],
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  ItemMenu:any[] = [];

  isAr = false;
  isSp = false;
  isMD = false;
  isDt = false;
  isOr = false;
  isDs = false;
  isAl = false;

  priceQuantity = 0;
  totalPrice = 0;

  constructor(private itemMenuService: ItemMenuService) {
  }

  ngOnInit(): void {
    this.getItemMenu();
  }


 getItemMenu(): void {
     this.itemMenuService.getItemMenu()
        .subscribe((itemMenu) => {
          this.ItemMenu = itemMenu;
          console.log(this.ItemMenu);
        });
  }

  changeValue(variable: any, val: number) {
    variable.min_quantity += val;

    console.log("Min: ",typeof variable.min_quantity, variable.min_quantity);
    console.log("Price: ",typeof variable.product_price, variable.product_price);
    console.log("P: ",typeof this.priceQuantity);

    this.priceQuantity = variable.min_quantity * variable.product_price;  //not working yet
    this.totalPrice += this.priceQuantity;                                //not working yet
  }



  showMenuAppetizer(){
    if (this.isAr === false){
      this.isAr = true;
      this.isSp = false;
      this.isMD = false;
      this.isDt = false;
      this.isOr = false;
      this.isDs = false;
      this.isAl = false;
    }else{
      this.isAr = false;
    }
  }

  showMenuSoup(){
    if (this.isSp === false){
      this.isAr = false;
      this.isSp = true;
      this.isMD = false;
      this.isDt = false;
      this.isOr = false;
      this.isDs = false;
      this.isAl = false;
    }else{
      this.isSp = false;
    }
  }

  showMenuMainDishes(){
    if (this.isMD === false){
      this.isAr = false;
      this.isSp = false;
      this.isMD = true;
      this.isDt = false;
      this.isOr = false;
      this.isDs = false;
      this.isAl = false;
    }else{
      this.isMD = false;
    }
  }

  showMenuDessert(){
    if (this.isDt === false){
      this.isAr = false;
      this.isSp = false;
      this.isMD = false;
      this.isDt = true;
      this.isOr = false;
      this.isDs = false;
      this.isAl = false;
    }else{
      this.isDt = false;
    }
  }

  showMenuOther(){
    if (this.isOr === false){
      this.isAr = false;
      this.isSp = false;
      this.isMD = false;
      this.isDt = false;
      this.isOr = true;
      this.isDs = false;
      this.isAl = false;
    }else{
      this.isOr = false;
    }
  }

  showMenuDrinks(){
    if (this.isDs === false){
      this.isAr = false;
      this.isSp = false;
      this.isMD = false;
      this.isDt = false;
      this.isOr = false;
      this.isDs = true;
      this.isAl = false;
    }else{
      this.isDs = false;
    }
  }

  showMenuAlcohol(){
    if (this.isAl === false){
      this.isAr = false;
      this.isSp = false;
      this.isMD = false;
      this.isDt = false;
      this.isOr = false;
      this.isDs = false;
      this.isAl = true;
    }else{
      this.isAl = false;
    }
  }


}
