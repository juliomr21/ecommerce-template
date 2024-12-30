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
urlBase = environment.URL_BASE
  constructor(private http: HttpConexionService,private router: Router) {

}
login(){
let url = this.urlBase + 'auth/login';
let data = {
  email: this.userName,
  password: this.password
}
this.http.post_login(url,data).subscribe(
  (res:any) => {console.log(res);
    localStorage.setItem('token',res['token']);
    localStorage.setItem('user',res['user']);
    this.router.navigateByUrl('/home');
  },
  error => console.log(error)
)
}
}