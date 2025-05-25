import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CanastaPage } from './canasta.page';

describe('CanastaPage', () => {
  let component: CanastaPage;
  let fixture: ComponentFixture<CanastaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CanastaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
