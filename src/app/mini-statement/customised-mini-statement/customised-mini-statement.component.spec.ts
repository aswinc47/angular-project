import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomisedMiniStatementComponent } from './customised-mini-statement.component';

describe('CustomisedMiniStatementComponent', () => {
  let component: CustomisedMiniStatementComponent;
  let fixture: ComponentFixture<CustomisedMiniStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomisedMiniStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomisedMiniStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
