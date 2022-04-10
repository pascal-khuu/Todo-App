import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  texte: any[] = [];

  //  constructor(){
  //    this.texte= []
  //    this.text='';
  //  }


  ajouterTexte(p: string) {
    this.texte.push(p);
    console.log(this.texte);

  }

  onSubmit(dataForm: any) {
    console.log(dataForm);
    console.log(dataForm.form.value.details);
    this.ajouterTexte(dataForm.form.value.details);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
