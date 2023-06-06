import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../service.service';
import { ShowComponent } from './show/show.component';
import { HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card.component';
import { StaffComponent } from './staff/staff.component';
import { CreateComponent } from './create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    CardComponent,
    StaffComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
