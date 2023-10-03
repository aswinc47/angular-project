import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicMiniStatementComponent } from './basic-mini-statement.component';

describe('BasicMiniStatementComponent', () => {
  let component: BasicMiniStatementComponent;
  let fixture: ComponentFixture<BasicMiniStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicMiniStatementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicMiniStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
