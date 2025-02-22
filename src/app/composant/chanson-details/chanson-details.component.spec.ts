import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChansonDetailsComponent } from './chanson-details.component';

describe('ChansonDetailsComponent', () => {
  let component: ChansonDetailsComponent;
  let fixture: ComponentFixture<ChansonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChansonDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChansonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
