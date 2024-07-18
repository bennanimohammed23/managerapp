import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutdevisComponent } from './ajoutdevis.component';

describe('AjoutdevisComponent', () => {
  let component: AjoutdevisComponent;
  let fixture: ComponentFixture<AjoutdevisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjoutdevisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjoutdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
