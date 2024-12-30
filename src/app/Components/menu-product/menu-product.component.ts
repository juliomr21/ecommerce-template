import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-product',
  standalone: true,
  imports: [],
  templateUrl: './menu-product.component.html',
  styleUrl: './menu-product.component.css'
})
export class MenuProductComponent {
constructor(private http: HttpConexionService,private router:Router) {}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.http.show();
  this.http.setTema('Produtos e Serviços');
}
goTo(route: string) {
  this.router.navigate([route]);}
}
