import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnviadasPage } from './enviadas.page';

describe('EnviadasPage', () => {
  let component: EnviadasPage;
  let fixture: ComponentFixture<EnviadasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
