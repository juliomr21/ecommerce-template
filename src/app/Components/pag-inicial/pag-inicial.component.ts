import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpConexionService } from '../../http-conexion.service';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DinamicFormatPipe } from "../../Pipes/dinamic-format.pipe";

@Component({
  selector: 'app-pag-inicial',
  standalone: true,
  imports: [FormsModule, DinamicFormatPipe],
  templateUrl: './pag-inicial.component.html',
  styleUrl: './pag-inicial.component.css'
})
export class PagInicialComponent {
usuario = '';
urlBase = environment.URL_BASE;
productos = 0;
pedidos = 0;
ingresos = 0
isLoading = true;

constructor(private http:HttpConexionService,private router:Router) { }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.usuario = localStorage.getItem('user') || '';
  this.http.hide();
  this.http.showF();
  this.http.setTema('home')
  this.load_data()
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.http.show();
  
}
go_to(dir:string){
  this.router.navigateByUrl(dir);

}
load_data(){
  let url = `${this.urlBase}dashboard/summary`
  this.http.get(url).subscribe(
    (res:any) =>{
      this.pedidos = res.today.totalOrders;
      this.ingresos = res.today.totalSpending;
      this.productos = res.today.differentProducts;
      this.isLoading = false
      console.log(res)
    }
  )
}
}
