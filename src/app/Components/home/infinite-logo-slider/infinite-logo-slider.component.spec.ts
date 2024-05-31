import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfiniteLogoSliderComponent } from './infinite-logo-slider.component';

describe('InfiniteLogoSliderComponent', () => {
  let component: InfiniteLogoSliderComponent;
  let fixture: ComponentFixture<InfiniteLogoSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfiniteLogoSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfiniteLogoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
