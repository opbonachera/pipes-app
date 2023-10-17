import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentals-page',
  templateUrl: './fundamentals-page.component.html',
  styleUrls: ['./fundamentals-page.component.css']
})
export class FundamentalsPageComponent {
  public nameLower: string = 'ornella'
  public nameUpper: string = 'ORNELLA'
  public nameTitleCase: string = 'Ornella'

  public customDate: Date = new Date();
}
