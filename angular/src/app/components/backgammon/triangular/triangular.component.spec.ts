import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriangularComponent } from './triangular.component';

describe('TriangularComponent', () => {
  let component: TriangularComponent;
  let fixture: ComponentFixture<TriangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriangularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TriangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
