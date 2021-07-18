import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CongratsModalComponent } from '../congrats-modal/congrats-modal.component';
import { BudgetHelper } from '../helper/budget.helper';
import { CHALLENGES, EXPENSES, GOALS } from '../mock-data';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  
  public challenges = CHALLENGES;
  public goals = GOALS;

  @Output() challengeCompleted: EventEmitter<boolean> = new EventEmitter();
  constructor(private budgetHelper: BudgetHelper) { }

  ngOnInit() {
    // mockup a challenge complete event
    setTimeout(() => {
      this.challengeCompleted.emit(true);
    }, 2000);
  }

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
