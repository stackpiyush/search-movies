import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()
export class MoviesService {
  apiKey: string;



  constructor(private _jsonp: Jsonp) {
    this.apiKey = 'a40affbd4f3a7e7768e83e7262601491';
    console.log('MovieService Initialized...')
   }

   getPopular() {
     return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=a40affbd4f3a7e7768e83e7262601491')
      .map(res => res.json());
   }

   searchMovies(searchStr: string) {
    // return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this.apiKey)
      //.map(res => res.json());
      const data = {"user_auth":{"user_name":"admin","password":"21232f297a57a5a743894a0e4a801fc3","version":"1"},"application_name":"RestTest","name_value_list":[]};

      return this._jsonp.get('http://crm.scideassolutions.com/service/v4_1/rest.php?method=login&input_type=JSON&response_type=JSON&rest_data=')
       .map(res => res.json());
      // alert(data);
   }

   getMovie(id: string) {
       return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey)
        .map(res => res.json());
   }
}
