import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadsayaUpdateComponent } from './sadsaya-update.component';

describe('SadsayaUpdateComponent', () => {
  let component: SadsayaUpdateComponent;
  let fixture: ComponentFixture<SadsayaUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SadsayaUpdateComponent]
    });
    fixture = TestBed.createComponent(SadsayaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
