import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Object;
  constructor(private router: ActivatedRoute, private _movieService: MoviesService) {  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      let id = params['id'];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
      })
    })
  }

}
