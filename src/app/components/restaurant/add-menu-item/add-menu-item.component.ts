import { Component, OnInit } from '@angular/core';
import {ItemMenuService} from "./add-menu-item.service";
import {ReservationService} from "../../reservation/reservation.service";


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

  constructor(private itemMenuService: ItemMenuService) { }

  ngOnInit(): void {
    console.log('test');

    this.getItemMenu();
    console.log('menu: ', this.ItemMenu)
  }

  getItemMenu(): void {
    this.itemMenuService.getItemMenu()
        .subscribe((itemMenu) => {
              this.ItemMenu = itemMenu;
              console.log(this.ItemMenu);
        })
  }


  add():void{

  }

  //Grams menu
  headElementsGramItem = ['Product name', 'Ingredients', 'Product price ($)', 'Product weight (g)', 'Remove item'];

    //Mililiters menu
    headElementsMlItem = ['Product name', 'Ingredients', 'Product price ($)', 'Product weight (ml)', 'Remove item'];

    //Centiliter menu
    headElementsClItem = ['Product name', 'Ingredients', 'Product price ($)', 'Product weight (cl)', 'Remove item'];


}
