import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardingPassComponent } from './boarding-pass.component';

describe('BoardingPassComponent', () => {
  let component: BoardingPassComponent;
  let fixture: ComponentFixture<BoardingPassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoardingPassComponent]
    });
    fixture = TestBed.createComponent(BoardingPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
