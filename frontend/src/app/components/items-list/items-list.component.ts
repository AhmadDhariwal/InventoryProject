import { ItemService } from './../../services/item.service';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
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

 items: any[] = [];
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

   console.log("Onload");
   this.ItemService.getitem().subscribe
   ({
    next: (data : any) =>{
      console.log("Items are :", data );
      this.items= data.items;
    },
    error:(error) => {
      console.error("Error in fetching items :", error);
    }

   });

}
}
