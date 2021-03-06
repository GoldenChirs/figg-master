import { Budget } from "./model/budget";
import { Challenge } from "./model/challenge";
import { Expense } from "./model/expense";
import { Goal } from "./model/goal";
import { Saving } from "./model/saving";


export const EXPENSES: Expense[] = [
    { id: 11, amount: 100, category: "Food", description: "Sushi" },
    { id: 12, amount: 50, category: "Gas", description: "Esso" },
    { id: 13, amount: 200, category: "Grocery", description: "T&T" },
    { id: 14, amount: 120, category: "Makeup", description: "Shoppers" },
    { id: 15, amount: 20, category: "Food", description: "Mcdonalds" },
    { id: 16, amount: 35, category: "Food", description: "Taiwanese" },
    { id: 17, amount: 200, category: "Utility", description: "Electricity" },
    { id: 18, amount: 1600, category: "Rent", description: "Home" },
    { id: 19, amount: 100, category: "Pet", description: "Petsmart" },
    { id: 20, amount: 30, category: "Food", description: "Steak" }
];

export const PENDING_EXPENSES: Expense[] = [
    { id: 21, amount: 52.64, category: "Rental Car & Taxi", description: "Uber.com" },
    { id: 22, amount: 50, category: "Gas", description: "Esso" },
    { id: 23, amount: 16.89, category: "Food", description: "Mcdonalds" },
]

export const PLANNED_EXPENSES: Expense[] = [{ id: 1, amount: 500, category: "Food" },
{ id: 2, amount: 200, category: "Gas" },
{ id: 3, amount: 500, category: "Grocery" },
{ id: 4, amount: 50, category: "Makeup" },
{ id: 7, amount: 180, category: "Utility" },
{ id: 8, amount: 1600, category: "Rent" },
{ id: 9, amount: 100, category: "Pet" },
{ id: 10, amount: 100, category: "Parking" },
{ id: 11, amount: 200, category: "Rental Car & Taxi"}];

export const ACTUAL_SAVINGS: Saving[] = [
    { id: 21, amount: 500 }
];

export const BUDGET: Budget = {
    actual_expense: EXPENSES,
    planned_expense: PLANNED_EXPENSES,
    actual_saving: ACTUAL_SAVINGS,
    planned_saving: { id: 31, amount: 100 },
}

export const CHALLENGES: Challenge[] = [
    { id: 0, category: "Food", amount: 200, description: "Spend $200 on Food and Dining this month", duration: 30 },
    { id: 1, category: "Food", frequency: 2, description: "Spend 2 times only on Restaurant this month", duration: 30 },
];

export const GOALS: Goal[] = [
    { id: 0, description: "Save $2000 for travel", amount: 2000, category: "Travel" },
    { id: 1, description: "Save $500 for ipadPro", amount: 500, category: "Shopping" },
];

export const GROUP_TO_CATEGORY_MAP = [
    { group: "Auto & Transportation", categories: ["Gas", "Parking", "Rental Car & Taxi"] },
    { group: "Food & Dinings", categories: ["Food", "Grocery"] },
    { group: "Living & Utilities", categories: ["Utility", "Rent"] },
    { group: "Others", categories: ["Makeup", "Pet"] },
];

export const GROUP_ICON_MAP = {
    "Auto & Transportation": "fa-car",
    "Food & Dinings": "fa-utensils",
    "Living & Utilities": "fa-home",
    "Others": "fa-credit-card",
}

export const GOAL_ICON_MAP = {
    "Travel": "fa-plane",
    "Shopping": "fa-shopping-cart",
}

export const CHALLENGE_ICON_MAP = {
    "Food": "fa-utensils",
}