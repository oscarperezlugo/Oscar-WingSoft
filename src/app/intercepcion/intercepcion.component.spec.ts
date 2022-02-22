import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercepcionComponent } from './intercepcion.component';

describe('IntercepcionComponent', () => {
  let component: IntercepcionComponent;
  let fixture: ComponentFixture<IntercepcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntercepcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntercepcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
