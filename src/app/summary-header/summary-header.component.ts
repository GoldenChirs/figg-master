import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';

@Component({
  selector: 'app-summary-header',
  templateUrl: './summary-header.component.html',
  styleUrls: ['./summary-header.component.scss'],
})
export class SummaryHeaderComponent implements OnInit {

  constructor(public budgetHelper: BudgetHelper) { }

  ngOnInit() {}

}
