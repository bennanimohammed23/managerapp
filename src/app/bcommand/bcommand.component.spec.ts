import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BcommandComponent } from './bcommand.component';

describe('BcommandComponent', () => {
  let component: BcommandComponent;
  let fixture: ComponentFixture<BcommandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BcommandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BcommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
