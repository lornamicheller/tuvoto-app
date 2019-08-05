import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNewsPage } from './info-news.page';

describe('InfoNewsPage', () => {
  let component: InfoNewsPage;
  let fixture: ComponentFixture<InfoNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoNewsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
