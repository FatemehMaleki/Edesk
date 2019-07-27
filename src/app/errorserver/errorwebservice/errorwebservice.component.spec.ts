import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorwebserviceComponent } from './errorwebservice.component';

describe('ErrorwebserviceComponent', () => {
  let component: ErrorwebserviceComponent;
  let fixture: ComponentFixture<ErrorwebserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorwebserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorwebserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
