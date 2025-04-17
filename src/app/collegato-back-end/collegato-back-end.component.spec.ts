import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegatoBackEndComponent } from './collegato-back-end.component';

describe('CollegatoBackEndComponent', () => {
  let component: CollegatoBackEndComponent;
  let fixture: ComponentFixture<CollegatoBackEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollegatoBackEndComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollegatoBackEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
