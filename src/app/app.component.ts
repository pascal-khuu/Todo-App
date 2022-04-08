import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'to-do-app-project';
  
   texte:any[] = [];
   
  //  constructor(){
  //    this.texte= []
  //    this.text='';
  //  }
 

  ajouterTexte( p:string){
   this.texte.push(p);
   console.log(this.texte);
   
  }

  onSubmit(dataForm: any) {
    console.log(dataForm);
    console.log(dataForm.form.value.details);
    this.ajouterTexte(dataForm.form.value.details);
       
  }

  
}
