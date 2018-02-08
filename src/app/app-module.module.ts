import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFilterPipe } from './shared/restaurant-filter.pipe';
import { StarRatingComponent } from './star-rating/star-rating.component';
import {Route,RouterModule} from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {NotFoundComponent} from './not-found/not-found.component';

const roouters : Route[] = [
   {path:'', redirectTo:'home',pathMatch : 'full'},
  {path:'restaurants', component: RestaurantListComponent },
 {path:'home', component:WelcomeComponent},
 {path:'**', component:NotFoundComponent }];

@NgModule({
  imports: [
    CommonModule,
     RouterModule.forRoot(roouters)
  ],
  declarations: [RestaurantListComponent,WelcomeComponent,NotFoundComponent,
    RestaurantFilterPipe,
    StarRatingComponent],
    exports : [RouterModule]
})
export class AppModuleModule { }
