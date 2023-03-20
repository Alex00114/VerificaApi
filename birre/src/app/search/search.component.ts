import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BirreService } from '../birre.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  query!: string;
  results: any;
  obsBeer!: Observable<Object>;
  constructor(public beerService: BirreService) {}

  submit(query:HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsBeer = this.beerService.searchBeer(this.query);
    this.obsBeer.subscribe((data) => this.results = data); 
  }

}
