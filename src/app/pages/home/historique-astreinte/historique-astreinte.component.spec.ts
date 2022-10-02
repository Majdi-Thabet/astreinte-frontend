import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAstreinteComponent } from './historique-astreinte.component';

describe('HistoriqueAstreinteComponent', () => {
  let component: HistoriqueAstreinteComponent;
  let fixture: ComponentFixture<HistoriqueAstreinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueAstreinteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoriqueAstreinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
