import { Routes } from '@angular/router';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { ItemcreateComponent } from './components/itemcreate/itemcreate.component';
export const routes: Routes = [



  {
     path : '',
    loadComponent : () => {
      return import('./components/items-list/items-list.component').then(
        (m) => m.ItemsListComponent,
      )
    }
  },

  {
    path : 'create',
    loadComponent : () => {
      return import('./components/itemcreate/itemcreate.component').then(
        (m) => m.ItemcreateComponent,
      )
    }
  },

  {
    path:'edit/:id',
    loadComponent : () =>{
      return import('./components/itemcreate/itemcreate.component').then(
        (m) => m.ItemcreateComponent,
      )
    }
  },

];

