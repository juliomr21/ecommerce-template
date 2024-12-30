import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarSupComponent } from './bar-sup.component';

describe('BarSupComponent', () => {
  let component: BarSupComponent;
  let fixture: ComponentFixture<BarSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarSupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
