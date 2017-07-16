import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesService } from './services/movies.service';
import { appRoutingProvider } from './app.routes';
import { MovieComponent } from './components/movie/movie.component';




@NgModule({
  declarations: [
    MovieComponent,
    AboutComponent,
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    RouterModule,
    appRoutingProvider,
    FormsModule,

  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
