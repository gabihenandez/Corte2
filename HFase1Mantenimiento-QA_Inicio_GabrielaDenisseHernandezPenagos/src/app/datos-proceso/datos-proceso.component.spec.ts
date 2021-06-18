import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosProcesoComponent } from './datos-proceso.component';

describe('DatosProcesoComponent', () => {
  let component: DatosProcesoComponent;
  let fixture: ComponentFixture<DatosProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
