import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormaspagoPage } from './formaspago.page';

describe('FormaspagoPage', () => {
  let component: FormaspagoPage;
  let fixture: ComponentFixture<FormaspagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FormaspagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
