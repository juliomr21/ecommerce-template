import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {
  urlBase = environment.URL_BASE;
  list_products:any = [];
  show_list = false;
constructor(private http: HttpConexionService,private router:Router) {}

  ngOnInit(): void {
    this.http.show();
    this.http.setTema('Catálogo de produtos');
    this.load_data();
  }
 load_data(){
   let url = this.urlBase + 'products';
   this.http.get(url).subscribe(
   (res:any) => {
     this.list_products = res;
     this.show_list = true;
   }
   )
 }
 criar_p(){
   this.router.navigate(['create-product']);
 }
}
