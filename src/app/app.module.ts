
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiServiceService } from './api-service.service';
import { CoinsRepositoryComponent } from './coins-repository/coins-repository.component';
import { WithCredentialsInterceptor } from './interceptors/with-credentials.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    CoinsRepositoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
   {
     provide: HTTP_INTERCEPTORS,
     useClass: WithCredentialsInterceptor,
     multi: true
 },
    ApiServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }