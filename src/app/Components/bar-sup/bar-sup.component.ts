import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';

@Component({
  selector: 'app-bar-sup',
  standalone: true,
  imports: [],
  templateUrl: './bar-sup.component.html',
  styleUrl: './bar-sup.component.css'
})
export class BarSupComponent {
  constructor(private http:HttpConexionService) { }
  visible = false;
  titlePage = '';
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.visibleBar$.subscribe(res => this.visible = res)
    this.http.temaBar$.subscribe(res => this.titlePage = res)
  }
back(){
  window.history.back();}
}



