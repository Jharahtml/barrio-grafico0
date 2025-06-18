import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgeneralesPage } from './agenerales.page';

describe('AgeneralesPage', () => {
  let component: AgeneralesPage;
  let fixture: ComponentFixture<AgeneralesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AgeneralesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
