import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CongratsModalComponent } from '../congrats-modal/congrats-modal.component';
import { BudgetHelper } from '../helper/budget.helper';
import { CHALLENGES, CHALLENGE_ICON_MAP, EXPENSES, GOALS, GOAL_ICON_MAP } from '../mock-data';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
})
export class ChallengesComponent implements OnInit {
  public iconClassMap = GOAL_ICON_MAP;
  public groupIconClassMap = CHALLENGE_ICON_MAP;
  
  public challenges = CHALLENGES;
  public goals = GOALS;

  public numGoalsCompleted = 0;
  public numChallengesCompleted = 0;

  @Output() challengeCompleted: EventEmitter<boolean> = new EventEmitter();
  constructor(private budgetHelper: BudgetHelper) { }

  ngOnInit() {
    // mockup a challenge complete event
    setTimeout(() => {
      this.challengeCompleted.emit(true);
      this.numChallengesCompleted++;
    }, 2000);
    this.getGoalsCompleted();
    this.getChallengesCompleted();
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

  public getGoalIcon(goalName: string) {
    let iconClass = this.iconClassMap[goalName];
    return iconClass;
  }

  public getChallengeIcon(groupName: string) {
    let iconClass = this.groupIconClassMap[groupName];
    return iconClass;
  }

  public isGoalComplete(goalAmount: number) {
    return (goalAmount - this.budgetHelper.actualSavingSum) <= 0;
  }

  private getGoalsCompleted() {
    this.goals.forEach((goal) => {
      if (this.isGoalComplete(goal.amount)) {
        this.numGoalsCompleted++;
      }
    });
  }

  
  private getChallengesCompleted() {
    this.numChallengesCompleted = 0;
  }

}
