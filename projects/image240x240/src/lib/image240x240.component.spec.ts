import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Image240x240Component } from './image240x240.component';

describe('Image240x240Component', () => {
  let component: Image240x240Component;
  let fixture: ComponentFixture<Image240x240Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Image240x240Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Image240x240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
