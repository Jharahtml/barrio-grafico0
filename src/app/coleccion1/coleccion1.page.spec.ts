import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coleccion1Page } from './coleccion1.page';

describe('Coleccion1Page', () => {
  let component: Coleccion1Page;
  let fixture: ComponentFixture<Coleccion1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Coleccion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
