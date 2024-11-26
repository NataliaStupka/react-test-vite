// 1. Імпортуємо функцію createAction
import { createAction } from '@reduxjs/toolkit';
//якості аргументу приймає рядок який описує тип екшену та повертає функцію створення екшену (фабрику).

// 2. Створюємо фабрики екшенів
export const addTask = createAction('tasks/addTask');

export const deleteTask = createAction('tasks/deleteTask');

export const toggleCompleted = createAction('tasks/toggleCompleted');

export const setStatusFilter = createAction('filters/setStatusFilter');

console.log(toggleCompleted(1));
// { type: "tasks/toggleCompleted", payload: 1 }
//type це рядок який передається при оголошенні фабрики.

console.log(setStatusFilter('hello'));
// { type: "filters/setStatusFilter", payload: "hello" }
//payload це значення аргументу що передається при виклику фабрики.
