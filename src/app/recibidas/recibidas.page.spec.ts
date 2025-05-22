import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecibidasPage } from './recibidas.page';

describe('RecibidasPage', () => {
  let component: RecibidasPage;
  let fixture: ComponentFixture<RecibidasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecibidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
