import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './vsitas/login/login.component';
import { ClienteComponent } from './vsitas/cliente/cliente.component';
import { ClienteDataComponent } from './vsitas/cliente-data/cliente-data.component';
import { HomeComponent } from './vsitas/home/home.component';
import { RegistroComponent } from './vsitas/registro/registro.component';
import {Ng2GoogleChartsModule} from'ng2-google-charts';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClienteComponent,
    ClienteDataComponent,
    HomeComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    BrowserAnimationsModule,
    Ng2GoogleChartsModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
