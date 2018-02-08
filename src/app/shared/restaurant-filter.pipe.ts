import { Pipe, PipeTransform } from '@angular/core';
import {Irestaurant} from './irestaurant';
@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {

  transform(value: Irestaurant[], args: string): Irestaurant[] {
    args=(args) ?args.toLocaleLowerCase() :null;
    return args ? value.filter(
      (restaurant:Irestaurant)=>restaurant.restaurantTitle.toLocaleLowerCase().indexOf(args)!==-1
      ||restaurant.restaurantCity.toLocaleLowerCase().indexOf(args)!==-1
      ||restaurant.restaurantState.toLocaleLowerCase().indexOf(args)!==-1
      ||restaurant.starRating.toString().indexOf(args)!==-1)
      
      :value;
  }

}
