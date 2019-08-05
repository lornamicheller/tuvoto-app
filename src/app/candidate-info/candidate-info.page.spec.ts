import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateInfoPage } from './candidate-info.page';

describe('CandidateInfoPage', () => {
  let component: CandidateInfoPage;
  let fixture: ComponentFixture<CandidateInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidateInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
