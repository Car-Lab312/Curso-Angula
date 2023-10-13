import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageTsComponent } from './main-page.ts.component';

describe('MainPageTsComponent', () => {
  let component: MainPageTsComponent;
  let fixture: ComponentFixture<MainPageTsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageTsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
