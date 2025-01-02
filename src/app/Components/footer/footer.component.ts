import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConexionService } from '../../http-conexion.service';
import { OverlayPanelModule } from 'primeng/overlaypanel';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [OverlayPanelModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  visible = false;
  menu = false;
  
constructor(private router: Router, private http:HttpConexionService) {}
  
  ngOnInit(): void {
    this.http.visibleFooter$.subscribe(res => this.visible = res)
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
