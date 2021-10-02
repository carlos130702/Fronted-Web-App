import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms"; "@angular/forms";


@Component({
  selector: 'app-login-driver',
  templateUrl: './login-driver.component.html',
  styleUrls: ['./login-driver.component.css']
})
export class LoginDriverComponent implements OnInit {

  submitted: boolean=false;

  loginForm: FormGroup = this.formBuilder.group({
    ownerEmail: ['',{validators: [Validators.required, Validators.email], updateOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn:'change'}],
  });


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
 
  }  
  
  get driverEmail(){ return this.loginForm.get('driverEmail');}
  get password(){ return this.loginForm.get('password');}



  submitForm(){
    console.log(this.loginForm.valid);
    this.submitted = true;
  }
}
