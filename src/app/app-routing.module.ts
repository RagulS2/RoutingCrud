import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { CardComponent } from './card/card.component';
import { StaffComponent } from './staff/staff.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [{path:'Student',component:ShowComponent},
{path:'Student/:id',component:CardComponent},
{path:'staff',component:StaffComponent},
{path:'create',component:CreateComponent},
{path:'create/:id',component:CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
