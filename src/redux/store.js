import { configureStore } from '@reduxjs/toolkit'; //? для створення store, повертає новий об'єкт store

// 1. Оголошуєм початкове значення стану Redux
const initialState = {
  tasks: {
    items: [
      { id: 0, text: 'Learn HTML and CSS', completed: true },
      { id: 1, text: 'Get good at JavaScript', completed: true },
      { id: 2, text: 'Master React', completed: false },
      { id: 3, text: 'Discover Redux', completed: false },
      { id: 4, text: 'Build amazing apps', completed: false },
    ],
  },
  filters: {
    status: 'all',
  },
};

// 2. Передаємо початкове значення стану Redux
const rootReducer = (state = initialState, action) => {
  // Редюсер розрізняє екшени за значенням властивості type
  switch (action.type) {
    // Залежно від типу екшену виконуватиметься різна логіка
    case 'tasks/addTask': {
      return {
        ...state,
        tasks: {
          items: [...state.tasks.items, action.payload],
        },
      };
    }

    case 'tasks/deleteTask':
      return {
        ...state,
        tasks: {
          items: state.tasks.items.filter(task => task.id !== action.payload),
        },
      };

    case 'tasks/toggleCompleted':
      return {
        ...state,
        tasks: {
          items: state.tasks.items.map(task => {
            if (task.id !== action.payload) {
              return task;
            }
            return {
              ...task,
              completed: !task.completed,
            };
          }),
        },
      };

    case 'filters/setStatusFilter':
      return {
        ...state,
        filters: {
          status: action.payload,
        },
      };

    // Якщо редюсер не повинен обробляти якийсь тип екшену,
    // необхідно повернути наявний стан без змін.
    default:
      return state;
  }
};

// повертає новий об'єкт store
export const store = configureStore({
  reducer: rootReducer,
});

//--------------------
// // src/main.jsx
// //Після створення стору необхідно зв'язати його з компонентами React,
// // щоб вони могли отримувати доступ до його стану та методів. Компонентом Provider(приймає однойменний пропс store)
// //   <Provider store={store}>
// //     <App />
// //   </Provider>;
