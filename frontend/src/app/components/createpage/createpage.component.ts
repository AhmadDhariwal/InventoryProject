import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-createpage',
  standalone: true,
  imports: [RouterLink, NavbarComponent],
  templateUrl: './createpage.component.html',
  styleUrl: './createpage.component.scss'
})
export class CreatepageComponent {
     hello = signal("Hello world");
}
