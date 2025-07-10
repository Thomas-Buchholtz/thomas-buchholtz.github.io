import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Heroshot } from './heroshot';

describe('Heroshot', () => {
  let component: Heroshot;
  let fixture: ComponentFixture<Heroshot>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Heroshot],
    }).compileComponents();

    fixture = TestBed.createComponent(Heroshot);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
