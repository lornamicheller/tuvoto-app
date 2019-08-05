import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Popover3Component } from './popover3.component';

describe('Popover3Component', () => {
  let component: Popover3Component;
  let fixture: ComponentFixture<Popover3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popover3Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popover3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
