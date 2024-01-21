import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { DetailsComponent } from './details/details.component';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
    {
      path: '',
      component: DashboardComponent,
      title: 'Home page',
    },
    {
      path: 'list',
      component: ProductListComponent,
      title: 'Product list',
    },
    {
      path: 'details/:id',
      component: DetailsComponent,
      title: 'Product details',
    },
    {
      path: 'map',
      component: MapComponent,
      title: 'Map details',
    },
  ];