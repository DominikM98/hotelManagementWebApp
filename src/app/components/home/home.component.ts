import {Component, NgModule, OnInit} from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public chartType: string = 'doughnut';

  public chartDatasets: Array<any> = [
    {data: [50, 30, 20, 5, 2], label: 'My First dataset'}
  ];

  public chartLabels: Array<any> = ['New', 'Checked-in', 'Checked-out', 'Before check-out', 'Canceled'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#FDB45C', '#49FC9A', '#DF3DFE', '#3774E6',  '#F7464A'],
      borderWidth: 1,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {  }
  };


  public chartClicked(e: any): void {
  }

  public chartHovered(e: any): void {
  }

}
