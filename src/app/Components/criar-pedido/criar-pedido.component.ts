import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
@Component({
  selector: 'app-criar-pedido',
  standalone: true,
  imports: [CascadeSelectModule,FormsModule,DropdownModule],
  templateUrl: './criar-pedido.component.html',
  styleUrl: './criar-pedido.component.css'
})
export class CriarPedidoComponent {
  urlBase = environment.URL_BASE;
  list_products:any = [];
  show_list = false;
  list_clientes:any = [];
  lis_pedidos:any = []
  cliente:any = ''
  total_items = 0;
  valor_total = 0;
  isLoading = false;
constructor(private http: HttpConexionService,private router:Router) {}

  ngOnInit(): void {
    this.http.show();
    this.http.setTema('Pedido');
    this.load_data();
    this.load_clientes()
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
 load_clientes(){
  let url = this.urlBase + 'clients';
  this.http.get(url).subscribe(
  (res:any) => {
   console.log(res)
   this.list_clientes = res
    // this.show_list = true;
  }
  )
 }
 criar_p(){
  this.isLoading = true;
  let url = `${this.urlBase}orders`
  let data = {
    client:this.cliente._id,
    products:this.lis_pedidos,
    total:this.total_items
  }
  this.http.post(url,data).subscribe((res:any)=>{
    console.log('pedido creado',res)
    this.router.navigate(['lista-pedidos'])
  
    this.isLoading = false;
  })
 console.log(data)
 }
 go_to(id:any){
  let url = `producto-detail/${id}`
  this.router.navigate([url])
 }
 add_product(producto:any){
  const productIndex = this.lis_pedidos.findIndex((item:any) => item.product === producto._id);

  if (productIndex > -1) {
    // Si el producto está, incrementa su cantidad
   this.lis_pedidos[productIndex].quantity += 1;
  } else {
    // Si el producto no está, lo añade al arreglo con cantidad inicial de 1
    this.lis_pedidos.push({ product: producto._id, quantity: 1,name:producto.name });
    this.total_items += 1;
  }
 
  this.valor_total += producto.price_sale;
 }
}
