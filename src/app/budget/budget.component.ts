import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';
import { BUDGET, EXPENSES, PLANNED_EXPENSES } from '../mock-data';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {

  constructor(public budgetHelper: BudgetHelper) { }

  ngOnInit() {
  }

}
