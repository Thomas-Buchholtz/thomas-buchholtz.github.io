
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {TestimonialComponent} from "./testimonial";

describe('TestimonialComponent', () => {
  let component: TestimonialComponent;
  let fixture: ComponentFixture<TestimonialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialComponent);
    component = fixture.componentInstance;

    component.testimonials = [
      {
        imageUrl: 'https://example.com/image.jpg',
        name: 'Max Mustermann',
        text: 'Das war super!',
        role: 'Entwickler',
        linkedinUrl: 'https://linkedin.com/in/maxmustermann'
      }
    ];

    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
