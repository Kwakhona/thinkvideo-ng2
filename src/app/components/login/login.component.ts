import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;
  sent = false;
  btnText = 'Login';

  constructor(public router: Router) { }

  ngOnInit() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  onFormSubmit() {
    if (this.userForm.valid) {
      this.sent = true;
      this.btnText = 'Loading...';
      setTimeout(() => {
        this.sent = false;
        this.userForm.reset();
        this.router.navigateByUrl('/dashboard');
      }, 2000);
    }
  }
}
