import exptrcker from './module.js';

export let db = exptrcker("ExpenseTracker", {
    Users: "++id,UserName,Password,AccountNumber"
});