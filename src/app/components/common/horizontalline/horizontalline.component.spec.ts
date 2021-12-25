import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontallineComponent } from './horizontalline.component';

describe('HorizontallineComponent', () => {
  let component: HorizontallineComponent;
  let fixture: ComponentFixture<HorizontallineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorizontallineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontallineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
