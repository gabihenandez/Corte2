import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantillaPComponent } from './plantilla-p.component';

describe('PlantillaPComponent', () => {
  let component: PlantillaPComponent;
  let fixture: ComponentFixture<PlantillaPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantillaPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantillaPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
