import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AmigoperfilPage } from './amigoperfil.page';

describe('AmigoperfilPage', () => {
  let component: AmigoperfilPage;
  let fixture: ComponentFixture<AmigoperfilPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AmigoperfilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
