import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsientoSelectionComponent } from './asiento-selection.component';

describe('AsientoSelectionComponent', () => {
  let component: AsientoSelectionComponent;
  let fixture: ComponentFixture<AsientoSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsientoSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsientoSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
