import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';
import { CHALLENGES, EXPENSES, GOALS } from '../mock-data';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  public challenges = CHALLENGES;
  public goals = GOALS;
  public points = 100;
  public faCoins = faCoins;

  constructor(private budgetHelper: BudgetHelper) { }

  ngOnInit() {}

  public addGoal() {

  }

  public addChallenge() {
    
  }

  public actualAmount(categoryName: string) {
    let categorySummary = this.budgetHelper.categorySummary.find((category) => {
      return category.name === categoryName;
    });

    return categorySummary.actual_amount;
  }

  public actualFrequency(categoryName: string) {
    let categoryExpenses = EXPENSES.filter((expense) => {
      return expense.category === categoryName;
    });
    return categoryExpenses.length;
  }

}
