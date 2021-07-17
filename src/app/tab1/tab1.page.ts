import { Component } from '@angular/core';
import { BudgetComponent } from '../budget/budget.component';
import { ExpensesComponent } from '../expenses/expenses.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public openTab = BudgetComponent as any;
  private activeTab = "summary";

  public switchSummaryTab(){
    this.openTab = BudgetComponent;
    this.activeTab = "summary";
  }

  public switchDetailsTab(){
    this.openTab = ExpensesComponent;
    this.activeTab = "details";
  }

  public isActiveTab(tabName: string) {
    return this.activeTab === tabName;
  }

  constructor() {
  }

}
