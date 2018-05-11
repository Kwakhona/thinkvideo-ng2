import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {
  private sub: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      console.log(params);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
