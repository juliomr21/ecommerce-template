import { Component } from '@angular/core';
import { HttpConexionService } from '../../http-conexion.service';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-criar-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './criar-product.component.html',
  styleUrl: './criar-product.component.css'
})
export class CriarProductComponent {
  urlBase = environment.URL_BASE;
  name = '';
  description = '';
  price = 0;
  price_sale = 0;
  tipo_product = 'fisico';
  tipo_stock = 'infinito';
  quantity = 0;
  category = '';
  code_sku = '';
  code_bar = '';
  height = 0;
  width = 0;
  length = 0;
  weight = 0;

  constructor(private http: HttpConexionService) {}

  ngOnInit(): void {
    this.http.show();
    this.http.setTema('Novo Produto');
  }

  validarCampos(): boolean {
    // Validar campos requeridos
    if (!this.name ) {
      console.error('Error: Los campos requeridos no están completos.');
      return false;
    }
    // Validar valores opcionales y consistencia
    if (this.tipo_stock === 'finito' && this.quantity <= 0) {
      console.error('Error: El stock debe ser mayor a 0 si es finito.');
      return false;
    }
    return true;
  }

  construirBody(): any {
    // Asignar valores de acuerdo con las reglas del modelo
    const type_stock = this.tipo_stock === 'infinito' ? false : true;

    return {
      name: this.name,
      description: this.description,
      price: this.price,
      price_sale: this.price_sale ,
      type_product: this.tipo_product,
      type_stock: type_stock,
      stock: type_stock ? this.quantity : undefined,
      category: this.category,
      code_sku: this.code_sku || undefined,
      code_bar: this.code_bar || undefined,
      whidth: this.width || undefined,
      height: this.height || undefined,
      weight: this.weight || undefined,
      length: this.length || undefined,
    };
  }

  criar_produto() {
    if (!this.validarCampos()) {
      console.error('Error: Validación fallida.');
      return;
    }

    const body = this.construirBody();
    const url = `${this.urlBase}products`;
    console.log('Body:', body);

    this.http.post(url, body).subscribe({
      next: (res) => console.log('Producto creado con éxito:', res),
      error: (error) => console.error('Error al crear producto:', error),
    });
  }
}
