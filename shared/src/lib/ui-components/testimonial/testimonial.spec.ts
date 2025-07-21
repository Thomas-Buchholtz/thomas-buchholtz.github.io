import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Testimonial } from './ui-components';

describe('Testimonial', () => {
  let component: Testimonial;
  let fixture: ComponentFixture<Testimonial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Testimonial],
    }).compileComponents();

    fixture = TestBed.createComponent(Testimonial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
