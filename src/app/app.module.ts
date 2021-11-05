import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './views/home/home/home.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { MovieReadComponent } from './components/movie-read/movie-read.component';

import { MaterialModule } from './material.module';
import { NgxLoadingModule } from 'ngx-loading';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';
import { MovieUpdateComponent } from './components/movie-update/movie-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MovieReadComponent,
    MovieDeleteComponent,
    MovieUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
