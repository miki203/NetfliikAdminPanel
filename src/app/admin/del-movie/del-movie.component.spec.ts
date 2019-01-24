import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelMovieComponent } from './del-movie.component';

describe('DelMovieComponent', () => {
  let component: DelMovieComponent;
  let fixture: ComponentFixture<DelMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelMovieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
