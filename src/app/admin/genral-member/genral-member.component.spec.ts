import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenralMemberComponent } from './genral-member.component';

describe('GenralMemberComponent', () => {
  let component: GenralMemberComponent;
  let fixture: ComponentFixture<GenralMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenralMemberComponent]
    });
    fixture = TestBed.createComponent(GenralMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
