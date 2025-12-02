import { inject, Injectable } from '@angular/core';
import { Inventory } from '../../../model/inventory';
import { HttpClient } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
    http = inject(HttpClient);
    private apiurl = `http://localhost:3000/items`;


 createitems(item : Inventory) {

    return this.http.post<Inventory>(this.apiurl,item).pipe(
    catchError(err => {
      console.error('Create item error : ', err);
      return throwError(()=> err);
    })
  );
 }

//  createitems(item : Inventory) {

//     const params = new HttpParams()
//       .set("page", page)
//       .set("limit", limit);
//      return this.http.post<any>(this.apiurl, { params }).pipe(
//     catchError(err => {
//       console.error('Create item error : ', err);
//       return throwError(()=> err);
//     })
//   );
//  }

 getitem(page :number , limit:number) {
  const url = `${this.apiurl}?page=${page}&limit=${limit}`;
  return this.http.get<Inventory>(url).pipe(
  catchError(err => {
    console.error("Get items err : ",err);
    return throwError(() => err);
  })
 );
}

 getitembyid(id: string) {
   const url = `${this.apiurl}/${id}`;
    return this.http.get<Inventory>(url).pipe(
     catchError(err => {
      console.error("Get item by id error : ",err);
      return throwError(() => err);
     })
    );
}
 updateitem(item: Inventory,id:string) {                           //id: string, updateData: Partial<Inventory>
     const url = `${this.apiurl}/${id}`;
     return this.http.put<Inventory>(url,item).pipe(       //    return this.http.put<Inventory>(url, updateData).pipe(

      catchError(err => {
        console.error("Update item error", err);
        return throwError(() => err);
      })
     );
  }

  deleteitem(id : string){
     const url = `${this.apiurl}/${id}`;
     return this.http.delete<Inventory>(url).pipe(
      catchError(err => {
        console.error("Delete Item Error : ", err);
         return throwError(() => err);
      })
     );
  }
}


