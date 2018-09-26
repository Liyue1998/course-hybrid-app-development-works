import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { ParentComponent } from './components/parent/parent.component';
import { LocalService } from './services/local.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [LocalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
