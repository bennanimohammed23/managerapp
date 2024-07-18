import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutBcComponent } from './ajout-bc.component';

describe('AjoutBcComponent', () => {
  let component: AjoutBcComponent;
  let fixture: ComponentFixture<AjoutBcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutBcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutBcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
