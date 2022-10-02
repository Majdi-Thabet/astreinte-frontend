import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAstreinteComponent } from './config-astreinte.component';

describe('ConfigAstreinteComponent', () => {
  let component: ConfigAstreinteComponent;
  let fixture: ComponentFixture<ConfigAstreinteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAstreinteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigAstreinteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
