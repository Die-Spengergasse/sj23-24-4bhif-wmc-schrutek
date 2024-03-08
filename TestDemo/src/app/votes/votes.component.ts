import { Component } from '@angular/core';

@Component({
  selector: 'app-votes',
  standalone: true,
  imports: [],
  templateUrl: './votes.component.html',
  styleUrl: './votes.component.css'
})
export class VotesComponent {
  public _voting: number = 0;

  constructor() {}

  public get CurrentVoting() {
      return this._voting;
  }

  public voteUp(): void {
      this._voting++;
  }

  public voteDown(): void {
      this._voting--;
  }
}
