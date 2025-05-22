import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Amigos1Page } from './amigos1.page';

describe('Amigos1Page', () => {
  let component: Amigos1Page;
  let fixture: ComponentFixture<Amigos1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Amigos1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
