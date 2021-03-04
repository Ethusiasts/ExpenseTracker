import exptrcker from './module.js';

export let db = exptrcker("ExpenseTracker", {
    expense: `++id, userName, category, expense_type, amount, date, time`,
    income: `++id, userName, category, income_type, amount, date, time`,
    Users: `++id,UserName,Password,AccountNumber`,
    group_expense: `++id, groupname, team_member, category, date, info, userName`,
    group_income: `++id, groupname, team_member, category, date, info, userName`,
    ikub_expense: `++id, ikubname, team_member, begin_date, interval, amount_per_round, punishment_fee, info, userName`,
});