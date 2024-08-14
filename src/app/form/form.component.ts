import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
   email= new FormControl('');
   password = new FormControl('');
   onSend( email:string ,password:string){
    console.log('envoi')
   }
}
