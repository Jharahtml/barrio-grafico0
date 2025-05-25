import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LacomercioPage } from './lacomercio.page';

describe('LacomercioPage', () => {
  let component: LacomercioPage;
  let fixture: ComponentFixture<LacomercioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LacomercioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
