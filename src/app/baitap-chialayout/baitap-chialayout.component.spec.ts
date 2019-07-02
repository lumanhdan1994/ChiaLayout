import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapChialayoutComponent } from './baitap-chialayout.component';

describe('BaitapChialayoutComponent', () => {
  let component: BaitapChialayoutComponent;
  let fixture: ComponentFixture<BaitapChialayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapChialayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapChialayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
