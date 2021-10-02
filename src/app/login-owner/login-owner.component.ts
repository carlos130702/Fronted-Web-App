import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms"; "@angular/forms";

@Component({
  selector: 'app-login-owner',
  templateUrl: './login-owner.component.html',
  styleUrls: ['./login-owner.component.css']
})

export class LoginOwnerComponent implements OnInit {

  submitted: boolean=false;

  loginForm: FormGroup = this.formBuilder.group({
    ownerEmail: ['',{validators: [Validators.required, Validators.email], updateOn: 'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn:'change'}],
  });


  constructor( private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.setPhoneValidation();
  }  
  
  //Properties
  get ownerEmail(){ return this.loginForm.get('ownerEmail');}
  get password(){ return this.loginForm.get('password');}

  //Dynamic validation setup
  setPhoneValidation(){
    const phoneControl = this.loginForm.get('ownerPhone');
    //Default Validations
    phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
  }

  submitForm(){
    console.log(this.loginForm.valid);
    this.submitted = true;
  }

}