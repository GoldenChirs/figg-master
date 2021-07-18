import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';
import { EXPENSES, PENDING_EXPENSES } from '../mock-data';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {

  public expenses = EXPENSES;
  public pendings = PENDING_EXPENSES;

  public slidePages = [{
    text: "test",
  },
  {
    text: "test",
  },
  {
    text: "test",
  }];

  constructor(public budgetHelper: BudgetHelper) {
  }

  ngOnInit() { }

}
