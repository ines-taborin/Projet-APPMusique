import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailsComponent } from './liste-details.component';

describe('ListeDetailsComponent', () => {
  let component: ListeDetailsComponent;
  let fixture: ComponentFixture<ListeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
