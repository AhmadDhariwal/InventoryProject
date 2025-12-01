import { ItemService } from './../../services/item.service';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createpage',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './createpage.component.html',
  styleUrl: './createpage.component.scss'
})
export class CreatepageComponent implements OnInit{
     private ItemService = inject(ItemService);
     private router = inject(Router);

     ngOnInit(): void {

     }
}
