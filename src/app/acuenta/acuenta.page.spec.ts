import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcuentaPage } from './acuenta.page';

describe('AcuentaPage', () => {
  let component: AcuentaPage;
  let fixture: ComponentFixture<AcuentaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AcuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
