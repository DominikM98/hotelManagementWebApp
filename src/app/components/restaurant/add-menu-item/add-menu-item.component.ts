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
  itemPrice = 0.00;
  itemWeight = '';
  itemType = '';
  itemQuantity = '';
  itemMinQuantity = '0';
  itemAllergens = '';

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
      allergens: this.itemAllergens,
      product_weight: this.itemWeight,
      product_price: this.itemPrice,
      type_of_product: this.itemType,
      min_quantity: this.itemMinQuantity,
      max_quantity: this.itemQuantity
    };

    this.itemMenuService.addItemMenu(newItemMenu).subscribe();

    this.clearForm();
    window.location.reload();
  }

  checkEmptyInput(){
    if (this.itemProductName == '' || this.itemIngredients == '' || this.itemAllergens == ''
        || this.itemWeight == '' || this.itemPrice <= 0 || this.itemType == ''){
      window.alert('You must fill red border!');
    }else{
      this.add();
    }
  }

  delete(id: String):void{
    this.itemMenuService.deleteItemMenu(id).subscribe();
    window.location.reload();
  }

  clearForm(){
    this.itemProductName = '';
    this.itemIngredients = '';
    this.itemAllergens = '';
    this.itemWeight = '';
    this.itemPrice = 0;
    this.itemType = '';
  }


  //Grams menu
  headElementsGramItem = ['Product name', 'Ingredients', 'Allergens', 'Product price (PLN)', 'Product weight (g)','Operations'];

    //Mililiters menu
    headElementsMlItem = ['Product name', 'Ingredients', 'Allergens', 'Product price (PLN)', 'Product weight (ml)', 'Operations'];

    //Centiliter menu
    headElementsClItem = ['Product name', 'Ingredients', 'Allergens', 'Product price (PLN)', 'Product weight (cl)', 'Operations'];

}


