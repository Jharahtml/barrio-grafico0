import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AinformacionPage } from './ainformacion.page';

describe('AinformacionPage', () => {
  let component: AinformacionPage;
  let fixture: ComponentFixture<AinformacionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AinformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
