import { Injectable } from "@angular/core";
import { BUDGET } from "../mock-data";

@Injectable({
    providedIn: 'root',
})
export class BudgetHelper {
    public budget = BUDGET;
    public plannedExpenseSum = 0;
    public actualExpenseSum = 0;
    public plannedSavingSum = 0;
    public actualSavingSum = 0;
    public expensesPercentage: number;
    public savingsPercentage: number;

    private PERCENTAGE_CONST = 100;

    constructor() {
        this.calculateSums();
        this.expensesPercentage = Math.round(this.actualExpenseSum / this.plannedExpenseSum * this.PERCENTAGE_CONST);
        this.savingsPercentage = Math.round(this.actualSavingSum / this.plannedSavingSum * this.PERCENTAGE_CONST);
    }

    private calculateSums() {
        this.budget.actual_expense.forEach((expense) => {
            this.actualExpenseSum += expense.amount;
        });

        this.budget.planned_expense.forEach((expense) => {
            this.plannedExpenseSum += expense.amount;
        });

        this.budget.actual_saving.forEach((saving) => {
            this.actualSavingSum += saving.amount;
        });

        this.plannedSavingSum = this.budget.planned_saving.amount;
    }

}