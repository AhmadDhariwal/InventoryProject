import { CommonModule } from '@angular/common';
import { ItemService } from './../../services/item.service';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-item-edit',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './item-edit.component.html',
  styleUrl: './item-edit.component.scss'
})
export class ItemEditComponent implements OnInit{
    private ItemService = inject(ItemService);
     items: any = [];
   userid: string | null = null;

    constructor(
      private route : ActivatedRoute,
      private router:Router
    ) {}

    ngOnInit(): void {

      this.userid = this.route.snapshot.paramMap.get('id');
      if(!this.userid) {this.router.navigate(['/']); return; }

        this.ItemService.getitembyid(this.userid).subscribe({
          next: (data) =>{
            console.log("Items are : " , data);
            this.items = data;
          },
          error: (error) => {
            console.error("Error in fetching items :" , error);
          }
        });
    }
    onUpdate(id : string, items : string ){
        this.ItemService.updateitem(this.items, this.userid!).subscribe({
          next: (data) =>{
            console.log("Items updated successfully",data);
            this.items = data;
          this.router.navigate(['/']);

          },
          error: (error) => {
            console.error("Error in fetching items :", error);
          }
        })
    }
    onCancel(){
      this.router.navigate(['/']);
    }

};
