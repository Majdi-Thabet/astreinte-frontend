import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierAstreinteComponent } from './calendrier-astreinte.component';

describe('CalendrierAstreinteComponent', () => {
  let component: CalendrierAstreinteComponent;
  let fixture: ComponentFixture<CalendrierAstreinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendrierAstreinteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendrierAstreinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
