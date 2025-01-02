import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista-pedido',
  standalone: true,
  imports: [],
  templateUrl: './lista-pedido.component.html',
  styleUrl: './lista-pedido.component.css'
})
export class ListaPedidoComponent {
  urlBase = environment.URL_BASE;
  list_products:any = [];
  list_pedidos:any = []
  show_list = false;
constructor(private http: HttpConexionService,private router:Router) {}

  ngOnInit(): void {
    this.http.show();
    this.http.setTema('Pedidos');
    // this.load_data();
    this.load_pedidos()
  }
 load_data(){
   let url = this.urlBase + 'products';
   this.http.get(url).subscribe(
   (res:any) => {
     this.list_products = res;
    
   }
   )
 }
 load_pedidos(){
  let url = this.urlBase + 'orders';
  this.http.get(url).subscribe(
  (res:any) => {
    this.list_pedidos = res;
    this.show_list = true;
   console.log(res)
  }
  )
}
calc_price(it:any){
  console.log('it',it)
  let total:number = 0;
  console.log('list',this.list_pedidos[it].products)
  this.list_pedidos[it].products.forEach((element:any) => {
    
    total += Number(element.product.price_sale * element.quantity)
   
  });
  return total
}
 criar_p(){
   this.router.navigate(['criar-pedido']);
 }
 go_to(id:any){
  let url = `producto-detail/${id}`
  this.router.navigate([url])
 }
}
