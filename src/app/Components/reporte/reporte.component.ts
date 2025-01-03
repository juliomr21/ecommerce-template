import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { DinamicFormatPipe } from "../../Pipes/dinamic-format.pipe";

@Component({
  selector: 'app-reporte',
  standalone: true,
  imports: [DinamicFormatPipe],
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent {
  paramId = ''
  urlBase = environment.URL_BASE;
  usuario = '';
  infoPedido: any;
  isLoading = false
  constructor(private http: HttpConexionService, private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.http.show();
    this.http.setTema('Comprovante');
    this.activatedroute.params.subscribe((res: any) => {
      this.paramId = res.id
      console.log(res)
      this.load_data()
    })
  }
  load_data() {
    this.isLoading = true
    let url = this.urlBase + `orders/${this.paramId}`
    this.usuario = localStorage.getItem('user') || '';
    this.http.get(url).subscribe((apiResponse: any) => {
      this.infoPedido = apiResponse
      this.isLoading = false
      console.log('comprovante', apiResponse)
    })
  }
  voltar(){
    this.router.navigate(['lista-pedidos']);
  }
}
