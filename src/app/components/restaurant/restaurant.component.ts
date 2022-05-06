import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  ls: string | null = '';
  constructor() { }

  ngOnInit(): void {
    //this.getTable()
    this.ls = localStorage.getItem('busy_table')
    console.log(this.ls)
  }

  getTable(){
    const table1 = document.getElementById('table1');
    const table2 = document.getElementById('table2');
    const table3 = document.getElementById('table3');
    const table4 = document.getElementById('table4');
    const table5 = document.getElementById('table5');
    const table6 = document.getElementById('table6');
    const table7 = document.getElementById('table7');
    const table8 = document.getElementById('table8');
    const table9 = document.getElementById('table9');
    const table10 = document.getElementById('table10');
    const table11 = document.getElementById('table11');
    const table12 = document.getElementById('table12');


    if (localStorage.getItem('busy_table') === 'BUSY'){
     // a.style.backgroundColor = 'red';
      // @ts-ignore
      table1.style.backgroundColor = 'red';
      // @ts-ignore
      table2.style.backgroundColor = 'red';
      // @ts-ignore
      table3.style.backgroundColor = 'red';// @ts-ignore
      table4.style.backgroundColor = 'red';// @ts-ignore
      table5.style.backgroundColor = 'red';// @ts-ignore
      table6.style.backgroundColor = 'red';// @ts-ignore
      table7.style.backgroundColor = 'red';// @ts-ignore
      table8.style.backgroundColor = 'red';// @ts-ignore
      table9.style.backgroundColor = 'red';// @ts-ignore
      table10.style.backgroundColor = 'red';// @ts-ignore
      table11.style.backgroundColor = 'red';// @ts-ignore
      table12.style.backgroundColor = 'red';
    }
  }

}
