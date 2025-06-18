import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HismisionesPage } from './hismisiones.page';

describe('HismisionesPage', () => {
  let component: HismisionesPage;
  let fixture: ComponentFixture<HismisionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HismisionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
