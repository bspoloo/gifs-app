import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LasyImageComponent } from './lasy-image.component';

describe('LasyImageComponent', () => {
  let component: LasyImageComponent;
  let fixture: ComponentFixture<LasyImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LasyImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LasyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
