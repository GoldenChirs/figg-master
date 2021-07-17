import { Injectable } from "@angular/core";
import { BUDGET, EXPENSES, PLANNED_EXPENSES } from "../mock-data";

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
    public categorySummary = [];

    private PERCENTAGE_CONST = 100;

    constructor() {
        this.calculateSums();
        this.summarizeCategories();
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

    private summarizeCategories() {
        PLANNED_EXPENSES.forEach((expense) => {
            this.categorySummary.push({
                name: expense.category,
                planned_amount: expense.amount,
            });
        });

        for (let i = 0; i < this.categorySummary.length; i++) {
            let categoryName = this.categorySummary[i].name;
            let expenseSum = 0;
            EXPENSES.forEach((expense) => {
                if (expense.category === categoryName) {
                    expenseSum += expense.amount;
                }
            });
            this.categorySummary[i].actual_amount = expenseSum;
        }
    }

}