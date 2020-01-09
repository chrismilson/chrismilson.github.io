import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevenshteinComponent } from './levenshtein.component';

describe('LevenshteinComponent', () => {
  let component: LevenshteinComponent;
  let fixture: ComponentFixture<LevenshteinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevenshteinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevenshteinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
