import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit, OnDestroy {
  private sub: any;
  userForm: FormGroup;
  btnText = 'Save';
  save = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
    });

    this.userForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.btnText = 'Saving...';
      this.save = true;
      setTimeout(() => {
        this.userForm.reset();
        this.router.navigateByUrl('/clients/qwertyuiop/overview');
      }, 2000);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
