import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userName = '';
password = '';
typePassword = 'password';
isLoading = false;
errorMsg = '';
urlBase = environment.URL_BASE
  constructor(private http: HttpConexionService,private router: Router) {

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.http.hideF()
}
login(){
  this.isLoading = true;
let url = this.urlBase + 'login';
let data = {
   username: this.userName,
  password: this.password
}
this.errorMsg = '';
this.http.post_login(url,data).subscribe(
  (res:any) => {console.log(res);
    localStorage.setItem('token',res['token']);
    localStorage.setItem('user',res['name']);
    this.router.navigateByUrl('/home');
  },
  (error) => {
    this.isLoading = false;
    this.errorMsg = 'Usuário ou senha incorretos';
    console.log(error)
  } )
}
changePassword(){
this.typePassword = this.typePassword === 'password' ? 'text' : 'password';
}
}