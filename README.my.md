# react-test-vite

<!-- ===========6 модуль - 2 частина========================== -->

1. створили файл **counterSlice** поруч із store. в ньму початковий стан
   **initialState** (а також reducer і action);
2. Викликаємо функцію **createSlice** з "@reduxjs/toolkit" і внеї поміщаємо
   **об'єкт налаштувань** {name, initialState, reducers: {}};
3. в store замінюємо { counterReducer } from './counter/reducer'; на {
   counterReducer } from './counterSlice';
4. !!!! **redux-persist** - (npm i redux-persist) бібліотека як _LocalStorige_
   для Redux (документацію можна знайти в redux-toolkit через пошук 'Use with
   Redux-Persist). (1)другий та третій імпорт з докум.Redux-Persist вставляємо в
   store; (2) копіюємо persistConfig, persistedReducer, middleware, persistor -
   вставляємо в store; PersistGate - огорнути в main App;

- **РОБИМО ОДІН РАЗ НА ПРОЕКТ**!;

<!-- =====Todo==== -->

1. в redux створюємо todoSlice.js(initialState, slice(name, initialState,
   reducers));
2. експортуємо slice і пидключаємо його в store
3. slice в selector: в todosSlice - export const selectTodos = state =>
   state.todos.items; в компоненті const todos = useSelector(selectTodos);
   <!--  -->
   <!--  -->
   <!-- ===========6 модуль - 1 частина========================== -->

4. встановлення **Redux Toolkit** (npm install @reduxjs/toolkit )
5. використання **React та Redux разом** (npm install react-redux)
6. 1. створили папку Redux, в ній; файл store, папку з 'фічею' (в даному випадку
      "counter") в ній файл reducer.js(початковий стан, та функція
      reducer(приймає старий state, повертає новий ))
   2. На store
7. на main огорнути **<Provider store={store}>**
8. витягуєм counter через **useSelector**
9. в **action** винесемо функції. Використовуємо **createAction**()
<!-- =9=9=9=9=9=9=9=99=9=9=9=9=9=9=9=9=9=9=9=9 -->

Redux - бібліотек керування станом програми;

1.  npm install @reduxjs/toolkit (встановлення **Redux Toolkit)**;
2.  npm install react-redux (Для використання **React та Redux разом**);
<!--  -->
3.  функція **configureStore(options)** для створення store, повертає новий
    об'єкт store
4.  Стору обов’язково потрібно передати властивість **reducer** - функцію із
    логікою зміни стану Redux.
5.  **Provider** (приймає **пропс store**) - зв'язує store з компонентами React,
    щоб вони могли отримувати доступ до його стану та методів.
6.  обертаємо Provider все дерево компонентів (щоб будь-який компонент у додатку
    міг використовувати стор)
7.  Додала **Redux DevTools** (вкладка Redux) - розширення інструментів
    розробника браузер Chrome Web Store;
8.  хук **useSelector(selector)** - дозволяє отримати значення Redux (зі стору),
    (повернути тільки ту частину стану, яка необхідна компоненту). Оновлюватися
    буде вся структура під useSelector
9.  Імпортуємо функцію **createAction**: import { createAction } from
    "@reduxjs/toolkit"; **Екшени** - це об'єкти, які передають дані (яка подія
    сталася в додатку) із компонентів у store; 9.1. **type** - обов'язкова
    властивість (рядок який описує тип події ); 9.2. **payload** -
    необов'язковій властивості (передають дані, крім функцій та класів.)
    <!-- const reduxAction = {
      type: "Action type",
      payload: "Payload value",
    }; -->
10. **useDispatch()** - відправити екшен (сповістить Redux про те, що в
    інтерфейсі відбулася подія); керує 'процесом'

    <!-- 1-10: Ми спроектували стан програми, пов'язали компоненти та стор, додали відправлення екшенів.  -->

<!--  логіка зміни стану Redux. -->

11. **Редюсери (reducers)** - це функція (яка може змінювати стан), яка приймає
    поточний стан та екшен як аргументи і повертає новий стан. (state, action)
    => nextState
       <!-- rafce - 'розгорнути' компонент -->

                  <!-- Змінити назву гілки: git branch -m new-name (якщо знаходишся в даній гілці); git branch -m old-name new-name (якщо знаходишся в іншій гілці); -->
