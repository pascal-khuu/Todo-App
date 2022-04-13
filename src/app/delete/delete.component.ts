import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
 public bool;
 public buttonDelete;
  constructor() { 
    this.bool=true;
    this.buttonDelete=true;
  }

  ngOnInit(): void {
  }
  deleteAll(){
    this.bool=false;
    alert('delete all tasks');
  }

}
