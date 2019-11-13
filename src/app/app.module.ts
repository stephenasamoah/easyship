import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from '../ui-components/ui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserValidators } from '../shared/_validators/user.validators';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    UiModule
  ],
  providers: [
    UserValidators
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
