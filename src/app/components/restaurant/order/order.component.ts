import { Component, OnInit } from '@angular/core';
import {ItemMenuService} from "../add-menu-item/add-menu-item.service";
import {OrderService} from "./order.service";

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

  isCashMethod = false;
  isCardMethod = false;
  isVoucherMethod = false;

  cashMethod = 0;
  cardMethod = 0;
  voucherMethod = 0;
  discountValue = 0;

  totalPrice = 0;
  priceQuantity = 0;
  total = 0;

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
      discount_value: this.discountValue,
      cash_method: this.cashMethod,
      card_method: this.cardMethod,
      voucher_method: this.voucherMethod
    };

    this.orderService.addBill(newBill)
        .subscribe();
  }

  changeValue(variable: any, val: number) {
    variable.min_quantity += val;

    const priceQuantity =  variable.product_price * variable.min_quantity;

    for (let i = 0; i < variable.product_name.length; i++){
      if (variable.min_quantity != 0){
        this.totalPrice += -this.totalPrice + priceQuantity;
      }
    }

    console.log("Price Quanitity: ",priceQuantity);
    console.log("total price: ",this.totalPrice);
    console.log("total : ",this.total);
  }

  refreshTotalPrice(){
    const temp = this.totalPrice * (this.discountValue / 100);
    this.totalPrice = this.totalPrice - temp;
  }

  showCashInput(){
    if (this.isCashMethod === false){
      this.isCashMethod = true;
    }else{
      this.isCashMethod = false;
    }
  }

  showCardInput(){
    if (this.isCardMethod === false){
      this.isCardMethod = true;
    }else{
      this.isCardMethod = false;
    }
  }

  showVoucherInput(){
    if (this.isVoucherMethod === false){
      this.isVoucherMethod = true;
    }else{
      this.isVoucherMethod = false;
    }
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
