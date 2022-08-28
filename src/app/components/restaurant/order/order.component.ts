import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
  Order:any[] = [];
  Order2:any[] = [];

  isAr = false;
  isSp = false;
  isMD = false;
  isDt = false;
  isOr = false;
  isDs = false;
  isAl = false;

  discountValue = 0;
  totalPrice = 0;
  totalPrice2 = 0;

  table = false;
  temp = 0;


  constructor(private itemMenuService: ItemMenuService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getItemMenu();

    if(localStorage.getItem('Total_price') === null){
        localStorage.setItem('busy_table','FREE')
    }
    this.getLS();
  }

  getLS(){
      this.Order2 = JSON.parse(<string>localStorage.getItem('Order'));

      if(this.Order2 === null){
          this.Order2 = [];
      }

      for (let i =0; i < this.Order2.length;i++){
          this.Order.push(this.Order2[i]);
      }

      this.totalPrice2 = JSON.parse(<string>localStorage.getItem('Total_price'));

      if (this.totalPrice2 === 0){
          this.totalPrice2 = this.totalPrice;
      }

      this.discountValue =  JSON.parse(<string>localStorage.getItem('Discount_value'))
  }

 getItemMenu(): void {
     this.itemMenuService.getItemMenu()
        .subscribe((itemMenu) => {
          this.ItemMenu = itemMenu;
        });

  }

  addBill(): void{

    const newBill = {
        order: this.Order,
        total_price: this.totalPrice2,
        discount_value: this.discountValue
    };

    this.orderService.addBill(newBill).subscribe();

    localStorage.removeItem('Order');
    localStorage.removeItem('Total_price');
    localStorage.removeItem('Discount_value');
    localStorage.removeItem('Discount_value');
    this.Order = [];
    window.location.reload();
  }

  changeValue(variable: any, val: number) {

    variable.min_quantity += val;

    if (variable.min_quantity > 0){
         if (!this.Order.includes(variable)){
            this.Order.push(variable);
        }
    }else{
        if (this.Order.includes(variable)){
            const index = this.Order.indexOf(variable);
            this.Order.splice(index,1);
        }
    }

    this.BillProduct.push(variable);

    this.totalPrice = _.sumBy(this.Order, amount => {
        if (amount.min_quantity > 1){
            return amount.product_price * amount.min_quantity;
        }else {
            return amount.product_price;
        }

    });
    this.totalPrice2 = this.totalPrice;

    if (this.totalPrice2 > 0){
        localStorage.setItem("busy_table", 'BUSY');
    }else{
        localStorage.setItem("busy_table", 'FREE');
    }

    if (variable.min_quantity === variable.max_quantity){
        window.alert('No more product can be added!')
    }

    this.saveInstance();
  }

  changeValueMinus(variable:any, val: number){
    variable.min_quantity -= val;

      if (variable.min_quantity >0){
          if (!this.Order.includes(variable)){
              this.Order.pop();
          }
      }else{
          if (this.Order.includes(variable)){
              const index = this.Order.indexOf(variable);
              this.Order.splice(index,1);
          }
      }

    this.BillProduct.pop();

    this.totalPrice = _.subtract(this.totalPrice, variable.product_price);
    this.totalPrice2 = this.totalPrice;

      if (this.totalPrice2 > 0){
          localStorage.setItem("busy_table", 'BUSY');
      }else{
          localStorage.setItem("busy_table", 'FREE');
      }

      for(let i = 0; i < this.Order.length; i++){
          this.Order2.pop();
      }

    this.saveInstance();
  }

  refreshTotalPrice(){
      this.temp = this.totalPrice * (this.discountValue / 100);
      localStorage.setItem('Discount_value',JSON.stringify(this.discountValue));
      this.totalPrice = this.totalPrice - this.temp;
      window.location.reload();
      this.saveInstance();
  }


  saveInstance(){
   localStorage.setItem('Order', JSON.stringify(this.Order));
   localStorage.setItem('Total_price', JSON.stringify(this.totalPrice));
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
