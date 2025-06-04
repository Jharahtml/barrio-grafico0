import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Editar1Page } from './editar1.page';

describe('Editar1Page', () => {
  let component: Editar1Page;
  let fixture: ComponentFixture<Editar1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Editar1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
