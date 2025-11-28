import { ItemService } from './../../services/item.service';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-itemcreate',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './itemcreate.component.html',
  styleUrl: './itemcreate.component.scss'
})
export class ItemcreateComponent {
    private itemService = inject(ItemService);

    newItem = { name: '', quantity: 0, price: 0, category: '' };
    message ='';

    onCreate() {
         console.log('Creating item:', this.newItem);

      this.itemService.createitems(this.newItem).subscribe({
        next:(Response) => {
          this.message= "Item Created Successfully";
          this.newItem = { name: '', quantity: 0, price: 0, category: '' };
        },
        error:(error) => {
            this.message = "Error creating item";
                console.error('Error:', error);
        }

    });
}
}
