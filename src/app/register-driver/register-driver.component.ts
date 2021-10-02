import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms"; "@angular/forms";
@Component({
  selector: 'app-register-driver',
  templateUrl: './register-driver.component.html',
  styleUrls: ['./register-driver.component.css']
})
export class RegisterDriverComponent implements OnInit {

  submitted: boolean=false;

  registerForm: FormGroup = this.formBuilder.group({
    driverName: ['', {validators: [Validators.required], undateOn: 'change'}],
    driverLastName: ['', {validators: [Validators.required], undateOn: 'change'}],
    driverEmail: ['',{validators: [Validators.required, Validators.email], updateOn: 'change'}],
    driverphone: ['',{update:'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn:'change'}],
  });


  constructor( private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.setPhoneValidation();
  }  
  
  //Properties
  get driverName(){ return this.registerForm.get('driverName');}
  get driverLastName(){ return this.registerForm.get('driverLastName');}
  get driverEmail(){ return this.registerForm.get('driverEmail');}
  get driverPhone(){ return this.registerForm.get('driverPhone');}
  get password(){ return this.registerForm.get('password');}
  get passwordRepeat(){ return this.registerForm.get('passwordRepeat');}

  //Dynamic validation setup
  setPhoneValidation(){
    const phoneControl = this.registerForm.get('driverPhone');
    //Default Validations
    phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
  }

  submitForm(){
    console.log(this.registerForm.valid);
    this.submitted = true;
  }
}