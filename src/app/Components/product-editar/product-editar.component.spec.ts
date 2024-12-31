import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductEditarComponent } from './product-editar.component';

describe('ProductEditarComponent', () => {
  let component: ProductEditarComponent;
  let fixture: ComponentFixture<ProductEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductEditarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
