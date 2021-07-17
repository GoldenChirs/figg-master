import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';
import { EXPENSES } from '../mock-data';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {

  public expenses = EXPENSES;

  constructor(public budgetHelper: BudgetHelper) {
  }

  ngOnInit() { }

}
