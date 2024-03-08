import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotesComponent } from './votes.component';

describe('VotesComponent', () => {
  let component: VotesComponent;
  let fixture: ComponentFixture<VotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be 1 when voteup is called one time', () => {
    //expect(component).toBeTruthy();
    component.voteUp()
    expect(component.CurrentVoting).toBe(1);
  });
});
