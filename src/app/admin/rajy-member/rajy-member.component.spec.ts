import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RajyMemberComponent } from './rajy-member.component';

describe('RajyMemberComponent', () => {
  let component: RajyMemberComponent;
  let fixture: ComponentFixture<RajyMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RajyMemberComponent]
    });
    fixture = TestBed.createComponent(RajyMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
