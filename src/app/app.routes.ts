import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Components
import { MoviesComponent } from './components/movies/movies.component';

import { AboutComponent } from './components/about/about.component';
import { MovieComponent } from './components/movie/movie.component';
// Route Configuration
export const routes: Routes = [
    { path: '', component: MoviesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'movie/:id', component: MovieComponent }

];

export const appRoutingProvider: ModuleWithProviders = RouterModule.forRoot(routes);
