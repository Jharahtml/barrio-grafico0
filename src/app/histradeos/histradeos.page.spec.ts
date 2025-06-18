import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistradeosPage } from './histradeos.page';

describe('HistradeosPage', () => {
  let component: HistradeosPage;
  let fixture: ComponentFixture<HistradeosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistradeosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
