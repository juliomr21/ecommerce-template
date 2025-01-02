import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-criar-pedido',
  standalone: true,
  imports: [CascadeSelectModule,FormsModule],
  templateUrl: './criar-pedido.component.html',
  styleUrl: './criar-pedido.component.css'
})
export class CriarPedidoComponent {
  urlBase = environment.URL_BASE;
  list_products:any = [];
  show_list = false;
  list_clientes:any = []
  cliente:any = ''
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
   this.list_clientes = res.map((cliente: any) => ({
    label: cliente.name, // Texto que se mostrará en el CascadeSelect
    value: cliente._id,  // Valor que se asociará al cliente seleccionado
  }));
    // this.show_list = true;
  }
  )
 }
 criar_p(){
   this.router.navigate(['create-product']);
 }
 go_to(id:any){
  let url = `producto-detail/${id}`
  this.router.navigate([url])
 }
}
