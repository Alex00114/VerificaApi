import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BirreService {

  constructor(private http: HttpClient) { }

  searchBeer(query: string) {
    const url = `https://api.punkapi.com/v2/beers?beer_name=${query}`;

    let obsBeers = this.http.get(url);
    return obsBeers;

  }
}
