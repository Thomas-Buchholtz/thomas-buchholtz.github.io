import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BunnyProject } from './bunny-project';

describe('BunnyProject', () => {
  let component: BunnyProject;
  let fixture: ComponentFixture<BunnyProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BunnyProject],
    }).compileComponents();

    fixture = TestBed.createComponent(BunnyProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
