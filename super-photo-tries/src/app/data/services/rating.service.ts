import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private currentRate: number;

  public get rating(): number {
    return this.currentRate;
  } 

  constructor() {
    this.currentRate = 0;
   }

  public rateUp(): void {
    this.currentRate++;
  }

  public reteDown(): void {
    this.currentRate--;
  }
}
