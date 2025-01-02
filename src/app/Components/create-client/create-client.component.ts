import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.css'
})
export class CreateClientComponent {
  nome:string = '';
  email = '';
  telefone = '';
  isLoading = false;
 urlBase = environment.URL_BASE;
 msg = '';
constructor(private http: HttpConexionService,private router:Router){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.http.show();
  this.http.setTema('Novo Cliente')
 
  
}
criar_cliente(){
let url = `${this.urlBase}clients`
let body = {
  name: this.nome,
  email: this.email,
  phone: this.telefone
}
this.msg = ''
this.isLoading = true
this.http.post(url,body).subscribe(
  (res: any) => {
    console.log(res)
    // this.msg = 'Cliente criado com sucesso'
    this.router.navigate(['lista-cliente'])
  },
  (error:any) => {
    this.msg = 'Cliente não criado '
    this.isLoading = false
    console.log(error)
  }
)
}
valida(){
  if(this.nome == '' || this.email == '')
    return true;
  return false;
}
}
