import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public chartOptions: any = {
    responsive: true
  };

  constructor() {
  }

  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }

  ngOnInit() {
    this.chartOptions.data = [
      {
        chartType: 'pie',
        chartData: [2.1, 15],
        chartLabels: ['Used', 'Total'],
        chartColors: [{
          hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
          hoverBorderWidth: 0,
          backgroundColor: ['#F7464A', '#46BFBD'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
        }],
        clientId: Math.random().toString(36).substring(7)
      },
      {
        chartType: 'pie',
        chartData: [4.1, 15],
        chartLabels: ['Used', 'Total'],
        chartColors: [{
          hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
          hoverBorderWidth: 0,
          backgroundColor: ['#4D5360', '#46BFBD'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
        }],
        clientId: Math.random().toString(36).substring(7)
      },
      {
        chartType: 'pie',
        chartData: [7.1, 15],
        chartLabels: ['Used', 'Total'],
        chartColors: [{
          hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
          hoverBorderWidth: 0,
          backgroundColor: ['#FDB45C', '#46BFBD'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
        }],
        clientId: Math.random().toString(36).substring(7)
      },
      {
        chartType: 'pie',
        chartData: [10, 15],
        chartLabels: ['Used', 'Total'],
        chartColors: [{
          hoverBorderColor: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.1)'],
          hoverBorderWidth: 0,
          backgroundColor: ['#949FB1', '#46BFBD'],
          hoverBackgroundColor: ['#FF5A5E', '#5AD3D1']
        }],
        clientId: Math.random().toString(36).substring(7)
      },
    ];
  }
}
