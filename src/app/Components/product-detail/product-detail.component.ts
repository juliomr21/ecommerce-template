import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  urlBase = environment.URL_BASE
  paramId = ''
  isLoading = true;
  productoInfo: any
  deleting = false
  constructor(private http: HttpConexionService, private activatedroute: ActivatedRoute, private router: Router) { }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.http.show()
    this.http.setTema('Produto')
    this.activatedroute.params.subscribe((res: any) => {
      this.paramId = res.id
      console.log(res)
      this.load_data()
    })
  }
  load_data() {
    let url = this.urlBase + `products/${this.paramId}`
    this.http.get(url).subscribe((res: any) => {
      this.isLoading = false;
      this.productoInfo = res
      console.log(res)
    })
  }
  delete_prod() {
    let url = this.urlBase + `products/${this.paramId}`
    this.deleting = true;
    this.http.delete(url).subscribe(
      (res: any) => {
      console.log(res);
      this.router.navigate(['catalogo-product'])
    },
  (error:any)=>{console.log(error), this.deleting = false}
  )
  }
  go_to_edit(){
    let url = `producto-editar/${this.paramId}`
    this.router.navigate([url])
  }
}
