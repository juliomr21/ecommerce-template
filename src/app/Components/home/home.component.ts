import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
 
  URL_BASE = environment.URL_BASE
 constructor(private http: HttpConexionService){

 }
 ngOnInit(): void {
  this.http.hide();
  let url = this.URL_BASE + 'products'
  this.http.get(url).subscribe(
    res => console.log(res)
  )
 }
 
}
