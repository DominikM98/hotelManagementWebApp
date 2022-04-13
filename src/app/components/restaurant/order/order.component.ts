import { Component, OnInit } from '@angular/core';
import {ItemMenuService} from "../add-menu-item/add-menu-item.service";
import {OrderService} from "./order.service";
import * as _ from 'lodash'

@Component({
  selector: 'order',
  templateUrl: './order.component.html',
  providers: [ItemMenuService, OrderService],
  styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit {

  ItemMenu:any[] = [];
  BillProduct:any[] = [];

  isAr = false;
  isSp = false;
  isMD = false;
  isDt = false;
  isOr = false;
  isDs = false;
  isAl = false;

  discountValue = 0;

  totalPrice = 0;

  constructor(private itemMenuService: ItemMenuService, private orderService: OrderService) {
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

  addBill(): void{

    const newBill = {
      total_price: this.totalPrice,
      discount_value: this.discountValue
    };

    this.orderService.addBill(newBill)
        .subscribe();

    window.location.reload();
  }

  changeValue(variable: any, val: number) {
    variable.min_quantity += val;

    this.BillProduct.push(variable);

    this.totalPrice = _.sumBy(this.BillProduct, amount => {
      return amount.product_price;
    });
  }

  changeValueMinus(variable:any, val: number){
    variable.min_quantity -= val;

    this.BillProduct.pop();

    this.totalPrice = _.subtract(this.totalPrice, variable.product_price)
  }

  refreshTotalPrice(){
    const temp = this.totalPrice * (this.discountValue / 100);
    this.totalPrice = this.totalPrice - temp;
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
