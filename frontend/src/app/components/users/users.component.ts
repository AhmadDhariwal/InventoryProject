import { ItemService } from './../../services/item.service';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterLink,NgIf,FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{
private ItemService =inject(ItemService);

constructor(
  private router: Router,
  private route  : ActivatedRoute,
){}

ngOnInit () : void {

}
}
