import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  submitPassword(password:string, email:string){
   localStorage.setItem("email",email);
   localStorage.setItem("password",password);

   console.log(localStorage.getItem("email"));
   
  }
}
