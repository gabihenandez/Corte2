import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulomaualComponent } from './modulomaual.component';

describe('ModulomaualComponent', () => {
  let component: ModulomaualComponent;
  let fixture: ComponentFixture<ModulomaualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModulomaualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModulomaualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
