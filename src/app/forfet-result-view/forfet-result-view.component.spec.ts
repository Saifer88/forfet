import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfetResultViewComponent } from './forfet-result-view.component';

describe('ForfetResultViewComponent', () => {
  let component: ForfetResultViewComponent;
  let fixture: ComponentFixture<ForfetResultViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfetResultViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfetResultViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
