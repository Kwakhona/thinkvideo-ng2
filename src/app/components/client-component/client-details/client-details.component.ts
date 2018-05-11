import {Component, OnInit, OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit, OnDestroy {
  public chartOptions: any = {
    responsive: true
  };

  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      console.log(params);
    });

    this.chartOptions = {
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
    };
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
