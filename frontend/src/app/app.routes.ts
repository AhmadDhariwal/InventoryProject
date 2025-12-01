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
    path : 'page',
    loadComponent : () => {
      return import('./components/createpage/createpage.component').then(
        (m) => m.CreatepageComponent,
      )
    }
  },

  {
    path:'edit/:id',
    loadComponent : () =>{
      return import('./components/item-edit/item-edit.component').then(
        (m) => m.ItemEditComponent,
      )
    }
  },
  {
    path:'delete/:id',
    loadComponent:() => {
      return import('./components/item-delete/item-delete.component').then(
        (m) => m.ItemDeleteComponent,
      )
    }
  }
];

