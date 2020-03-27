import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessBarComponent } from './process-bar/process-bar.component';
import { ProcessBtnComponent } from './process-btn/process-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    ProcessBarComponent,
    ProcessBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
