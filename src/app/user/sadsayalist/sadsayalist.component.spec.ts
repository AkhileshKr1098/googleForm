import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadsayalistComponent } from './sadsayalist.component';

describe('SadsayalistComponent', () => {
  let component: SadsayalistComponent;
  let fixture: ComponentFixture<SadsayalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadsayalistComponent]
    });
    fixture = TestBed.createComponent(SadsayalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
