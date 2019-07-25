import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDarkhastComponent } from './service-darkhast.component';

describe('ServiceDarkhastComponent', () => {
  let component: ServiceDarkhastComponent;
  let fixture: ComponentFixture<ServiceDarkhastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDarkhastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDarkhastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
