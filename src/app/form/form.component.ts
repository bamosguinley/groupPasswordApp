import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  showMessage: boolean = false;
  currentEmail!: string;
  currentPassword!: string;
  submitPassword(password:string, email:string){
   localStorage.setItem("email",email);
    localStorage.setItem("password", password);
    this.currentEmail=localStorage.getItem("email")||''
    this.currentPassword=localStorage.getItem("password")||''
  this.showMessage=true
   console.log(localStorage.getItem("email"));
   
  }
  
    formPass= new FormGroup({
      email: new FormControl(''),
      password: new FormControl('', [Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/)]
       ),
    })
}
// Validators.minLength(8),Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)