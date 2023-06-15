import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AifredComponent } from './aifred.component';

describe('AifredComponent', () => {
  let component: AifredComponent;
  let fixture: ComponentFixture<AifredComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AifredComponent]
    });
    fixture = TestBed.createComponent(AifredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
