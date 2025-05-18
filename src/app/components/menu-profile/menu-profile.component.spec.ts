import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuProfileComponent } from './menu-profile.component';

describe('MenuProfileComponent', () => {
  let component: MenuProfileComponent;
  let fixture: ComponentFixture<MenuProfileComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuProfileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
