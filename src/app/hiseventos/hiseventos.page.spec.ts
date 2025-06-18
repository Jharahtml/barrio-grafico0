import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HiseventosPage } from './hiseventos.page';

describe('HiseventosPage', () => {
  let component: HiseventosPage;
  let fixture: ComponentFixture<HiseventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HiseventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
