import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoshahedehDarkhastServiceComponent } from './moshahedeh-darkhast-service.component';

describe('MoshahedehDarkhastServiceComponent', () => {
  let component: MoshahedehDarkhastServiceComponent;
  let fixture: ComponentFixture<MoshahedehDarkhastServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoshahedehDarkhastServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoshahedehDarkhastServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
