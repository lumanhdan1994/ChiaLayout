import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaitapProductitemComponent } from './baitap-productitem.component';

describe('BaitapProductitemComponent', () => {
  let component: BaitapProductitemComponent;
  let fixture: ComponentFixture<BaitapProductitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaitapProductitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaitapProductitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
