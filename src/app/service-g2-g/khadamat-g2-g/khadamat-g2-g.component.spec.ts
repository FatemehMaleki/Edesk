import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadamatG2GComponent } from './khadamat-g2-g.component';

describe('KhadamatG2GComponent', () => {
  let component: KhadamatG2GComponent;
  let fixture: ComponentFixture<KhadamatG2GComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhadamatG2GComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhadamatG2GComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
