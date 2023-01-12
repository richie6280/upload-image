import { TestBed } from '@angular/core/testing';

import { Image240x240Service } from './image240x240.service';

describe('Image240x240Service', () => {
  let service: Image240x240Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Image240x240Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
