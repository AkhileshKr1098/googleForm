import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateUserFromComponent } from './update-user-from.component';

describe('UpdateUserFromComponent', () => {
  let component: UpdateUserFromComponent;
  let fixture: ComponentFixture<UpdateUserFromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserFromComponent]
    });
    fixture = TestBed.createComponent(UpdateUserFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
