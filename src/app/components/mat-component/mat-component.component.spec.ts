import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatComponentComponent } from './mat-component.component';

describe('MatComponentComponent', () => {
  let component: MatComponentComponent;
  let fixture: ComponentFixture<MatComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
