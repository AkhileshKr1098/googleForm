import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkhandMemberComponent } from './parkhand-member.component';

describe('ParkhandMemberComponent', () => {
  let component: ParkhandMemberComponent;
  let fixture: ComponentFixture<ParkhandMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParkhandMemberComponent]
    });
    fixture = TestBed.createComponent(ParkhandMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
