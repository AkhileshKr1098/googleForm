import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JilaMemberComponent } from './jila-member.component';

describe('JilaMemberComponent', () => {
  let component: JilaMemberComponent;
  let fixture: ComponentFixture<JilaMemberComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JilaMemberComponent]
    });
    fixture = TestBed.createComponent(JilaMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
