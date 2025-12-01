import { ItemService } from './../../services/item.service';
import { Component, inject,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-item-delsete',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './item-delete.component.html',
  styleUrl: './item-delete.component.scss'
})
export class ItemDeleteComponent implements OnInit{
   private ItemService = inject(ItemService);
    items: any = [];
   userid: string | null = null;

   constructor(
    private route : ActivatedRoute,
    private router:Router
   ){}

   ngOnInit(): void {
    this.userid = this.route.snapshot.paramMap.get('id');

    if(!this.userid) { this.router.navigate(['/']);  return;}

     this.ItemService.getitembyid(this.userid).subscribe
   ({
    next: (data) =>{
      console.log("Items are :", data );
      this.items= data;

    },
    error:(error) => {
      console.error("Error in fetching items :", error);
    }

   });

  }
  onDelete(id : string) {
    if (!this.userid) return;
    this.ItemService.deleteitem(this.userid).subscribe({
      next: () => {
        console.log("Item deleted successfully");
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error("Error deleting item:", error);
      }
    });
  }
  onCancel(){
     this.router.navigate(['/']);
  }


}
