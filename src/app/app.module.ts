import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TokenAdapter } from '@gfa/gfa-infra';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    TokenAdapter,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
