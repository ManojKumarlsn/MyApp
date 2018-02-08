import { Component, OnInit } from '@angular/core';
import { Irestaurant } from '../shared/irestaurant';
import{RestaurantService} from '../shared/Restaurant.Service';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  //styleUrls: ['./restaurant-list.component.css']
   styles: [`thead{color: #D35216}
  .temp{ background-color : midnightblue;}`],
  providers:[RestaurantService]
})
export class RestaurantListComponent implements OnInit {
pageTitle='Restaurant Management System';
imageWidth=150;
imageMargin=100;
showImage=false;
listFilter='Mogli';
restaurants : Irestaurant[];
//_service:RestaurantService;
  constructor(private _service:RestaurantService) { 
   // this._service=service;
  }

  ngOnInit() {
    this.restaurants=this._service.getRestaurants();
    console.log("Init Restaurant Component");
  }
toggleImage():void{
  this.showImage=!this.showImage;
}
}
