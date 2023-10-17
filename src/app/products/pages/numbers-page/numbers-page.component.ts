import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers-page',
  templateUrl: './numbers-page.component.html',
  styleUrls: ['./numbers-page.component.css']
})
export class NumbersPageComponent {
  public totalSells: number  = 4534.6756
  public netSells: number = 543.654565
  public percentage: number = .48
}
