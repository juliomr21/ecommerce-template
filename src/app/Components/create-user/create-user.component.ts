import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpConexionService } from '../../http-conexion.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {
  username = '';
  password = '';
  email = '';
  confirm_password = '';
  role = 'customer'
  typePassword = 'password';
  typePassword2 = 'password';
  errorMsg = '';
  URL_BASE = environment.URL_BASE
  disableTemp = false
  constructor(private http: HttpConexionService,private router:Router) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.hideF()
  }
  create_user() {
    this.disableTemp = true;
    let data = {
      name: this.username,
      password: this.password,
      email: this.email,
      role: this.role
    }
    let url = this.URL_BASE + 'users/'
    this.http.post_login(url, data).subscribe(
      (res:any) => {console.log(res); 
        localStorage.setItem('token',res['token']);
        localStorage.setItem('user',res['user']);
        this.disableTemp = false;
        this.router.navigateByUrl('/home');},
      (error:any) => {console.log(error);this.disableTemp = false; this.errorMsg = error.error.msg}
    )
  }
 
  //66cbe2276c29678c3b7bc672
  delete_prod() {
    const url = `${this.URL_BASE}products/67392b9eda8daf8308e10a96`;
    this.http.delete(url).subscribe(
      res => console.log('Product deleted:', res),
      error => {
        console.error('Delete failed:', error);
        if (error.status === 500) {
          console.error('Server error:', error.message);
        }
      }
    );
  }
  changePassword() {
    this.typePassword = this.typePassword === 'password' ? 'text' : 'password';
  }
  changePassword2() {
    this.typePassword2 = this.typePassword2 === 'password' ? 'text' : 'password';
  }
}
