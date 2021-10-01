import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from "@angular/forms"; "@angular/forms";

@Component({
  selector: 'app-register-owner',
  templateUrl: './register-owner.component.html',
  styleUrls: ['./register-owner.component.css']
})

export class RegisterOwnerComponent implements OnInit {

  submitted: boolean=false;

  registerForm: FormGroup = this.formBuilder.group({
    ownerName: ['', {validators: [Validators.required], undateOn: 'change'}],
    ownerLastName: ['', {validators: [Validators.required], undateOn: 'change'}],
    ownerEmail: ['',{validators: [Validators.required, Validators.email], updateOn: 'change'}],
    ownerphone: ['',{update:'change'}],
    password: ['', {validators: [Validators.required, Validators.minLength(5)], updatedOn:'change'}],
  });


  constructor( private formBuilder: FormBuilder) { }



  ngOnInit(): void {
    this.setPhoneValidation();
  }  
  
  //Properties
  get ownerName(){ return this.registerForm.get('ownerName');}
  get ownerLastName(){ return this.registerForm.get('ownerLastName');}
  get ownerEmail(){ return this.registerForm.get('ownerEmail');}
  get ownerPhone(){ return this.registerForm.get('ownerPhone');}
  get password(){ return this.registerForm.get('password');}
  get passwordRepeat(){ return this.registerForm.get('passwordRepeat');}

  //Dynamic validation setup
  setPhoneValidation(){
    const phoneControl = this.registerForm.get('ownerPhone');
    //Default Validations
    phoneControl?.setValidators([Validators.pattern('^[0-9]*$'), Validators.required]);
  }

  submitForm(){
    console.log(this.registerForm.valid);
    this.submitted = true;
  }

}
