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
  Order3:any[] = [];

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

  a:any;
  b:any;
  c:any;
  d:any;

  l = 0;
  q :any;

    // @ts-ignore
    @ViewChild('title') el: ElementRef;

  constructor(private itemMenuService: ItemMenuService, private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.getItemMenu();

    if (this.totalPrice === 0){
        localStorage.setItem("busy_table", 'FREE');
    }

   this.Order2 = JSON.parse(<string>localStorage.getItem('Order'));
    console.log(this.Order2);

    this.totalPrice2 = JSON.parse(<string>localStorage.getItem('Total_price'));
    JSON.parse(<string>localStorage.getItem('Discount_value'));

    //console.log('Order[]:', JSON.parse(<string>localStorage.getItem('Order')))
    console.log('Total:', JSON.parse(<string>localStorage.getItem('Total_price')))

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
        total_price: this.totalPrice,
        discount_value: this.discountValue
    };

    //this.orderService.addBill(newBill).subscribe();

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
            console.log('Push:',this.Order)
        }
    }else{
        if (this.Order.includes(variable)){
            const index = this.Order.indexOf(variable);
            this.Order.splice(index,1);
            console.log('Pop:',this.Order)
        }
    }

    this.BillProduct.push(variable);

    this.totalPrice = _.sumBy(this.BillProduct, amount => {
      return amount.product_price;
    });

      if (this.totalPrice > 0){
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

      if (this.totalPrice > 0){
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
    const temp = this.totalPrice * (this.discountValue / 100);
    this.totalPrice = this.totalPrice - temp;
    this.saveInstance();
  }

  saveInstance(){

      /*if (this.Order2 === null){
          localStorage.setItem('Order', JSON.stringify(this.Order));
      }else if (this.Order2 !== null){
         // this.getValue(this.Order, this.Order2,this.Order3);
          localStorage.setItem('Order', JSON.stringify(this.Order2));
      }*/

   localStorage.setItem('Order', JSON.stringify(this.Order));
      console.log('ORDER', this.Order)
      localStorage.setItem('Total_price', JSON.stringify(this.totalPrice));

      localStorage.setItem('Discount_value', JSON.stringify(this.discountValue));


      console.log('ORDER2', this.Order2)
      console.log('ORDER3', this.Order3)
  }

    getValue(o:any, o2:any, o3:any){

        for (let i = 0; i < o.length; i++){
            o2.push(o[i]);


        }

        console.log("getValue(o2):",o2)
        for (let j = 0; j < o2.length;j++){
            console.log("i:",j)
            console.log("o2:",o2[j]._id)
            console.log("i:",j+1)
            console.log("o2:",o2[j+1]._id)
            if (o2[j]._id === o2[j+1]._id){
                o2.pop();
            }
        }
        console.log("getValue(o2-1):",o2)


        /*      for (let j = 0; j < o.length; j++){
                // console.log('Order(for):',o[j]);
                console.log('l:',o.length)
                console.log('q:',o[j].min_quantity)

                console.log('o[',j,']',o[j].product_name)
                console.log('o2[',j,']',o2[j].product_name)
                o2.push(o[j]);
                //console.log('Order2:',o2)
            }

       for (let i = 0; i < o2.length; i++){
            //console.log('Order2: ', o2);
            o3.push(o2[i]);
           // console.log('Order3(o2): ',o3)
        }


        if (o2.length > 2){

                o3.push(o)

        }





  o3 = o2;
  console.log('Order3(o2): ',o3)

   }


      for (let i = 0; i < o2.length; i++){
            console.log('Order: ',o2[i]);
            if (o2[i] === o[i]){
                o3[i].min_quantity += 1;
            }
            o3.push(o2[i]);
            this.totalPrice += this.totalPrice2;
            console.log('Order 3: ',o3)
        }*/


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
