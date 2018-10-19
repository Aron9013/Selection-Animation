import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ChooseFinanceTypeComponent} from "./Page/Choose-Finance-Type/choose-finance-type.component";
import {FinanceTypeDataMock} from "./mock-data/finance-type-data.mock";
import {FinanceTypeCardComponent} from "./components/finance-type-card/finance-type-card.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ChooseFinanceTypeComponent,
    FinanceTypeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [
    FinanceTypeDataMock
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
