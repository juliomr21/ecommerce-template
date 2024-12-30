import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarSupComponent } from "./Components/bar-sup/bar-sup.component";
import { FooterComponent } from './Components/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BarSupComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce-template';
}
