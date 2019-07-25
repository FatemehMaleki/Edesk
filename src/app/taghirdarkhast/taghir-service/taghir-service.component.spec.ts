import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaghirServiceComponent } from './taghir-service.component';

describe('TaghirServiceComponent', () => {
  let component: TaghirServiceComponent;
  let fixture: ComponentFixture<TaghirServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaghirServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaghirServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
