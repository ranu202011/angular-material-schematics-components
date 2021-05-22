import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';

import { EmpHerirachyComponent } from './emp-herirachy.component';

describe('EmpHerirachyComponent', () => {
  let component: EmpHerirachyComponent;
  let fixture: ComponentFixture<EmpHerirachyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpHerirachyComponent ],
      imports: [
        MatButtonModule,
        MatIconModule,
        MatTreeModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpHerirachyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
