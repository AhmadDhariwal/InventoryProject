import { Routes } from '@angular/router';

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

