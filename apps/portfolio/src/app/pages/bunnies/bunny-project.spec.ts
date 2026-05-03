import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RabbitProjectComponent } from './bunny-project';

describe('BunnyProject', () => {
  let component: RabbitProjectComponent;
  let fixture: ComponentFixture<RabbitProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RabbitProjectComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RabbitProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
