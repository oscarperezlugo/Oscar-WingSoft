import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumerosPrimosComponent } from './numeros-primos.component';

describe('NumerosPrimosComponent', () => {
  let component: NumerosPrimosComponent;
  let fixture: ComponentFixture<NumerosPrimosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumerosPrimosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumerosPrimosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
