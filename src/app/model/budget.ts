import { Expense } from "./expense";
import { Saving } from "./saving";

export interface Budget {
    planned_expense: Expense[],
    actual_expense: Expense[],
    planned_saving: Saving,
    actual_saving: Saving[],
  }