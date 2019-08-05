import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Popover2Component } from './popover2.component';

describe('Popover2Component', () => {
  let component: Popover2Component;
  let fixture: ComponentFixture<Popover2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popover2Component ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
