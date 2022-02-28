import { Component, OnInit } from '@angular/core';
import {ItemMenuService} from "./add-menu-item.service";

@Component({
  selector: 'add-menu-item',
  templateUrl: './add-menu-item.component.html',
  providers: [ItemMenuService],
  styleUrls: ['./add-menu-item.component.scss']
})
export class AddMenuItemComponent implements OnInit {

  ItemMenu:any[] = [];
  itemProductName = '';
  itemIngredients = '';
  itemPrice = '';
  itemWeight = '';
  itemType = '';
  itemQuantity = '';

  constructor(private itemMenuService: ItemMenuService) { }

  ngOnInit(): void {
    this.getItemMenu();
  }

  getItemMenu(): void {
    this.itemMenuService.getItemMenu()
        .subscribe((itemMenu) => {
              this.ItemMenu = itemMenu;
              console.log(this.ItemMenu);
        })
  }


  add():void{
    const newItemMenu = {
      product_name: this.itemProductName,
      ingredients: this.itemIngredients,
      product_weight: this.itemWeight,
      product_price: this.itemPrice,
      type_of_product: this.itemType,
      quantity: this.itemQuantity
    };

    this.itemMenuService.addItemMenu(newItemMenu)
        .subscribe();

    this.clearForm();
  }

  delete(id: String, key: String):void{
    this.itemMenuService.deleteItemMenu(id)
        .subscribe();

    const index = this.ItemMenu.indexOf(key, 0);
    if (index > -1) {
      this.ItemMenu.splice(index, 1);
    }
  }

  clearForm(){
    this.itemProductName = '';
    this.itemIngredients = '';
    this.itemWeight = '';
    this.itemPrice = '';
    this.itemType = '';
  }


  //Grams menu
  headElementsGramItem = ['Product name', 'Ingredients', 'Product price ($)', 'Product weight (g)', 'Quantity product','Remove item'];

    //Mililiters menu
    headElementsMlItem = ['Product name', 'Ingredients', 'Product price ($)', 'Product weight (ml)','Quantity product', 'Remove item'];

    //Centiliter menu
    headElementsClItem = ['Product name', 'Ingredients', 'Product price ($)', 'Product weight (cl)','Quantity product', 'Remove item'];

}


