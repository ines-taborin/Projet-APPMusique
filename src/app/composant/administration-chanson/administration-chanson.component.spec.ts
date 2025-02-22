import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrationChansonComponent } from './administration-chanson.component';

describe('AdministrationChasonComponent', () => {
  let component: AdministrationChansonComponent;
  let fixture: ComponentFixture<AdministrationChansonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdministrationChansonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdministrationChansonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
