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

  isAppetizer= false;
  isSoup = false;
  isMainDishes = false;
  isDessert = false;
  isOther = false;
  isDrinks = false;
  isAlcohol = false;

  quantityValue=0;
  minQunatityValue=0;
  maxQunatityValue=100;

  titleFood = 'Chargrilled Mackerel With Sweet And Sour Beetroot';
  priceFood = '100.00';
  valueBill = 0;
  totalPrice = 0;

  lessQunatity(){
    if (this.quantityValue <= this.minQunatityValue){
      this.quantityValue = 0;
    }else{
      this.quantityValue = this.quantityValue - 1;
    }

    this.valueBill = this.quantityValue * parseFloat(this.priceFood);

  }

  moreQunatity(){
    if (this.quantityValue >= this.maxQunatityValue){
      this.quantityValue = 100;
    }else{
      this.quantityValue=this.quantityValue+1;
    }

    this.valueBill = this.quantityValue * parseFloat(this.priceFood);

  }



  showMenuAppetizer(){
    if (this.isAppetizer === false){
      this.isAppetizer = true;
      this.isSoup = false;
      this.isMainDishes = false;
      this.isDessert = false;
      this.isOther = false;
      this.isDrinks = false;
      this.isAlcohol = false;
    }else{
      this.isAppetizer = false;
    }
  }

  showMenuSoup(){
    if (this.isSoup === false){
      this.isAppetizer = false;
      this.isSoup = true;
      this.isMainDishes = false;
      this.isDessert = false;
      this.isOther = false;
      this.isDrinks = false;
      this.isAlcohol = false;
    }else{
      this.isSoup = false;
    }
  }

  showMenuMainDishes(){
    if (this.isMainDishes === false){
      this.isAppetizer = false;
      this.isSoup = false;
      this.isMainDishes = true;
      this.isDessert = false;
      this.isOther = false;
      this.isDrinks = false;
      this.isAlcohol = false;
    }else{
      this.isMainDishes = false;
    }
  }

  showMenuDessert(){
    if (this.isDessert === false){
      this.isAppetizer = false;
      this.isSoup = false;
      this.isMainDishes = false;
      this.isDessert = true;
      this.isOther = false;
      this.isDrinks = false;
      this.isAlcohol = false;
    }else{
      this.isDessert = false;
    }
  }

  showMenuOther(){
    if (this.isOther === false){
      this.isAppetizer = false;
      this.isSoup = false;
      this.isMainDishes = false;
      this.isDessert = false;
      this.isOther = true;
      this.isDrinks = false;
      this.isAlcohol = false;
    }else{
      this.isOther = false;
    }
  }

  showMenuDrinks(){
    if (this.isDrinks === false){
      this.isAppetizer = false;
      this.isSoup = false;
      this.isMainDishes = false;
      this.isDessert = false;
      this.isOther = false;
      this.isDrinks = true;
      this.isAlcohol = false;
    }else{
      this.isDrinks = false;
    }
  }

  showMenuAlcohol(){
    if (this.isAlcohol === false){
      this.isAppetizer = false;
      this.isSoup = false;
      this.isMainDishes = false;
      this.isDessert = false;
      this.isOther = false;
      this.isDrinks = false;
      this.isAlcohol = true;
    }else{
      this.isAlcohol = false;
    }
  }


}
