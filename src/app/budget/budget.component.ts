import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';
import { BUDGET, EXPENSES, PLANNED_EXPENSES } from '../mock-data';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit{
  public categories = [];

  private PERCENTAGE_CONST = 100;

  constructor(public budgetHelper: BudgetHelper) { }

  ngOnInit() {
    this.summarizeCategories();
  }
  
  private summarizeCategories() {
    PLANNED_EXPENSES.forEach((expense) => {
      this.categories.push({
        name: expense.category,
        planned_amount: expense.amount,
      });
    });
    
    for (let i = 0; i < this.categories.length; i++) {
      let categoryName = this.categories[i].name;
      let expenseSum = 0;
      EXPENSES.forEach((expense) => {
        if (expense.category === categoryName) {
          expenseSum += expense.amount;
        }
      });
      this.categories[i].actual_amount = expenseSum;
    }
  }
}
