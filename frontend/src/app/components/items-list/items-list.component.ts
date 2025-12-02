import { ItemService } from './../../services/item.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './items-list.component.html',
  styleUrl: './items-list.component.scss'
})
export class ItemsListComponent implements OnInit{
 private ItemService = inject(ItemService);
  private router = inject(Router);

 items: any[] = [];
 currentpage = 1;
 totalitems = 0;
 limit=10;

 searchTerm: string = '';

  array =[];

 get filteredItems() {
   if (!this.searchTerm) return this.items;
   return this.items.filter(item =>
     item.name?.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
     item.category?.toLowerCase().includes(this.searchTerm.toLowerCase())
   );
 }

   ngOnInit(): void {
      this.loadItems();
   }
   loadItems(){

   console.log("Onload");
   this.ItemService.getitem(this.currentpage , this.limit).subscribe
   ({
    next: (data : any) =>{
      console.log("Items are :", data );
      this.items= data.items;
      this.totalitems = data.total;
    },
    error:(error) => {
      console.error("Error in fetching items :", error);
    }

   });

}
nextPage()
{
   if(this.currentpage * this.limit <this.totalitems){
    this.currentpage++;
    this.loadItems();
   }
}
prevPage()
{
   if(this.currentpage > 1){
    this.currentpage--;
    this.loadItems();
   }
}
}
