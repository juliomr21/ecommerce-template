import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpConexionService } from '../../http-conexion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-inicial',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pag-inicial.component.html',
  styleUrl: './pag-inicial.component.css'
})
export class PagInicialComponent {
usuario = '';
constructor(private http:HttpConexionService,private router:Router) { }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.usuario = localStorage.getItem('user') || '';
  this.http.hide();
}
ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.http.show();
}
go_to(dir:string){
  this.router.navigateByUrl(dir);

}
}
