import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConexionService } from '../../http-conexion.service';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [OverlayPanelModule,FormsModule,CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  visible = false;
  menu = false;
  titlePage = '';
constructor(private router: Router, private http:HttpConexionService) {}
  
  ngOnInit(): void {
    this.http.visibleFooter$.subscribe(res => this.visible = res)
    this.http.temaBar$.subscribe(res => this.titlePage = res)
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['']);
  }
}
