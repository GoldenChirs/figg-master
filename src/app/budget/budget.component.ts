import { Component, OnInit } from '@angular/core';
import { BudgetHelper } from '../helper/budget.helper';
import { BUDGET, EXPENSES, GROUP_ICON_MAP, GROUP_TO_CATEGORY_MAP, PLANNED_EXPENSES } from '../mock-data';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss'],
})
export class BudgetComponent implements OnInit {
  public categoryGroupMap = GROUP_TO_CATEGORY_MAP;
  private PERCENTAGE_CONST = 100;

  private iconClassMap = GROUP_ICON_MAP;
  constructor(public budgetHelper: BudgetHelper) { }

  ngOnInit() {
  }

  public getActualAmount(categoryName: string) {
    let categorySummary = this.budgetHelper.categorySummary.find((category) => {
      return category.name === categoryName;
    });
    return categorySummary.actual_amount;
  }

  public getPlannedAmount(categoryName: string) {
    let categorySummary = this.budgetHelper.categorySummary.find((category) => {
      return category.name === categoryName;
    });
    return categorySummary.planned_amount;
  }

  public getPercentage(categoryName: string) {
    return this.getActualAmount(categoryName)/this.getPlannedAmount(categoryName) * this.PERCENTAGE_CONST;
  }

  public getGroupIcon(groupName: string) {
    let iconClass = this.iconClassMap[groupName];
    return iconClass;
  }
}
