import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceShekaitComponent } from './service-shekait.component';

describe('ServiceShekaitComponent', () => {
  let component: ServiceShekaitComponent;
  let fixture: ComponentFixture<ServiceShekaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceShekaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceShekaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
