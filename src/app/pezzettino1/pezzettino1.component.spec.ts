import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pezzettino1Component } from './pezzettino1.component';

describe('Pezzettino1Component', () => {
  let component: Pezzettino1Component;
  let fixture: ComponentFixture<Pezzettino1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pezzettino1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pezzettino1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
