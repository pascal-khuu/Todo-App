import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';

const routes: Routes = 
[  {path:'', component:AddComponent},
{path:'All', component:AddComponent},
{path:'Active', component:AddComponent},
{path:'Completed', component:DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
