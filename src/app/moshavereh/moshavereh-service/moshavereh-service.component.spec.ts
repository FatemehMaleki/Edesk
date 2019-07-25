import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshaverehServiceComponent } from './moshavereh-service.component';

describe('MoshaverehServiceComponent', () => {
  let component: MoshaverehServiceComponent;
  let fixture: ComponentFixture<MoshaverehServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoshaverehServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshaverehServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
