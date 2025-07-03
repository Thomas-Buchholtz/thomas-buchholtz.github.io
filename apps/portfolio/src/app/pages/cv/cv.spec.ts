import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import {Cv} from "./cv";

describe('Cv', () => {
  let fixture: ComponentFixture<Cv>;
  let component: Cv;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cv],
    }).compileComponents();

    fixture = TestBed.createComponent(Cv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the CV component', () => {
    expect(component).toBeTruthy();
  });

  it('should render the SVG element', () => {
    const svgEl = fixture.debugElement.query(By.css('svg'));
    expect(svgEl).toBeTruthy();
  });

  it('should have a mailto link on the email text', () => {
    const anchor = fixture.debugElement.query(By.css('a[xlink\\:href^="mailto:"]'));
    expect(anchor).toBeTruthy();
    expect(anchor.attributes['xlink:href']).toContain('mailto:tommy.buchholtz');
  });

  it('should render the correct email text', () => {
    const textEl = fixture.debugElement.query(By.css('a[xlink\\:href^="mailto:"] tspan')).nativeElement;
    expect(textEl.textContent).toBe('tommy.buchholtz@gmx.de');
  });

  it('should open email link in new tab safely', () => {
    const anchor = fixture.debugElement.query(By.css('a[xlink\\:href^="mailto:"]')).nativeElement;
    expect(anchor.getAttribute('target')).toBe('_blank');
    expect(anchor.getAttribute('rel')).toBe('noopener');
  });

  it('should have a LinkedIn link', () => {
    const liAnchor = fixture.debugElement.query(
      By.css('a[xlink\\:href="https://www.linkedin.com/in/thomas-buchholtz"]')
    );
    expect(liAnchor).toBeTruthy();
  });
});
