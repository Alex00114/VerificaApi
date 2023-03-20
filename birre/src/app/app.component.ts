import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { BirreService } from './birre.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'birre';
  obsBeer!: Observable<Object>;

  constructor(public beerService: BirreService) { 
    this. obsBeer = beerService.searchBeer("punk");
    this.obsBeer.subscribe((data) => console.log(data));
  }

}
