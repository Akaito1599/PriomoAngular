import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pezzettino2Component } from './pezzettino2.component';

describe('Pezzettino2Component', () => {
  let component: Pezzettino2Component;
  let fixture: ComponentFixture<Pezzettino2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pezzettino2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pezzettino2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
