import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionAstreinteComponent } from './gestion-astreinte.component';

describe('GestionAstreinteComponent', () => {
  let component: GestionAstreinteComponent;
  let fixture: ComponentFixture<GestionAstreinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionAstreinteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionAstreinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
