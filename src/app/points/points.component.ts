import { Component, OnInit } from '@angular/core';
import { faCoins } from '@fortawesome/free-solid-svg-icons';
import { BudgetHelper } from '../helper/budget.helper';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss'],
})
export class PointsComponent implements OnInit {
  public faCoins = faCoins;

  constructor(public budgetHelper: BudgetHelper) { }

  ngOnInit() {}

}
