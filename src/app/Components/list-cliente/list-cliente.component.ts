import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { DinamicFormatPipe } from "../../Pipes/dinamic-format.pipe";

@Component({
  selector: 'app-list-cliente',
  standalone: true,
  imports: [DinamicFormatPipe],
  templateUrl: './list-cliente.component.html',
  styleUrl: './list-cliente.component.css'
})
export class ListClienteComponent {
  urlBase = environment.URL_BASE;
  list_products:any = [];
  show_list = false;
constructor(private http: HttpConexionService,private router:Router) {}

  ngOnInit(): void {
    this.http.show();
    this.http.setTema('Clientes');
    this.load_data();
  }
 load_data(){
   let url = this.urlBase + 'clients';
   this.http.get(url).subscribe(
   (res:any) => {
    console.log(res)
     this.list_products = res;
     this.show_list = true;
   },(erro:any) =>{this.show_list = true; this.list_products = [];console.log('ddd',erro)} 
   )
 }
 criar_p(){
   this.router.navigate(['criar-cliente']);
 }
 go_to(id:any){
  let url = `producto-detail/${id}`
  this.router.navigate([url])
 }
}
