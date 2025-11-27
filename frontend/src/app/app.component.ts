import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ItemEditComponent } from "./components/item-edit/item-edit.component";
import { CreatepageComponent } from "./components/createpage/createpage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ItemEditComponent, CreatepageComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  template: `
  <app-navbar> </app-navbar>

  <main>
    <router-outlet>
     <app-createpage>   </app-createpage>
    </router-outlet>
  </main>
  `
})
export class AppComponent {
  title = 'frontend';
}
