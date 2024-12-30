import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpConexionService } from '../../http-conexion.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  visible = false;
constructor(private router: Router, private http:HttpConexionService) {}
  
  ngOnInit(): void {
    this.http.visibleFooter$.subscribe(res => this.visible = res)
  }

  goTo(route: string) {
    this.router.navigate([route]);
  }
}
