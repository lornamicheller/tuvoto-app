import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentSectionPage } from './comment-section.page';

describe('CommentSectionPage', () => {
  let component: CommentSectionPage;
  let fixture: ComponentFixture<CommentSectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentSectionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentSectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
