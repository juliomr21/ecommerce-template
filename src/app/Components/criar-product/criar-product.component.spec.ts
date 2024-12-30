import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarProductComponent } from './criar-product.component';

describe('CriarProductComponent', () => {
  let component: CriarProductComponent;
  let fixture: ComponentFixture<CriarProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriarProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
