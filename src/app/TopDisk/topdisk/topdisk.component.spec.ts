import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopdiskComponent } from './topdisk.component';

describe('TopdiskComponent', () => {
  let component: TopdiskComponent;
  let fixture: ComponentFixture<TopdiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopdiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
