import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceNazarsanjiComponent } from './service-nazarsanji.component';

describe('ServiceNazarsanjiComponent', () => {
  let component: ServiceNazarsanjiComponent;
  let fixture: ComponentFixture<ServiceNazarsanjiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceNazarsanjiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceNazarsanjiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
