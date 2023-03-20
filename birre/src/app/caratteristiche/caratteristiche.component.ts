import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { BirreService } from '../birre.service';

@Component({
  selector: 'app-caratteristiche',
  templateUrl: './caratteristiche.component.html',
  styleUrls: ['./caratteristiche.component.css']
})
export class CaratteristicheComponent implements OnInit{
  routeObs!: Observable<ParamMap>;
  beer: any;
  beerServiceObs!: Observable<any>;

  constructor(private route: ActivatedRoute, private beerService: BirreService) {}

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let beerId = params.get('id');
    console.log (beerId);

    if (beerId != null) {
      this.beerServiceObs = this.beerService.getBeer(beerId) ;
      this.beerServiceObs.subscribe((data)=>this.beer = data)
    }
  }
}
