import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalErrorComponent } from './global-error.component';

describe('GlobalErrorComponent', () => {
  let component: GlobalErrorComponent;
  let fixture: ComponentFixture<GlobalErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GlobalErrorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
