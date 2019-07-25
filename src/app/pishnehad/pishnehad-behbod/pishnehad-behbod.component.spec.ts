import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PishnehadBehbodComponent } from './pishnehad-behbod.component';

describe('PishnehadBehbodComponent', () => {
  let component: PishnehadBehbodComponent;
  let fixture: ComponentFixture<PishnehadBehbodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PishnehadBehbodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PishnehadBehbodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
