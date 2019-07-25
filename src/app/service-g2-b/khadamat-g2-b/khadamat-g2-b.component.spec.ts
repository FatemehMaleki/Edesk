import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KhadamatG2BComponent } from './khadamat-g2-b.component';

describe('KhadamatG2BComponent', () => {
  let component: KhadamatG2BComponent;
  let fixture: ComponentFixture<KhadamatG2BComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KhadamatG2BComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KhadamatG2BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
