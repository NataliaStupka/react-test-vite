# react-test-vite

<!-- rafce - 'розгорнути' компонент -->

1. React не має власний маршрутизатор. Встановлюємо маршрутизатор React Router
   (npm install react-router-dom). Для запуску маршрутизатора огортаєм в main
   <BrowserRouter><App /></BrowserRouter>

2. в App:
   <!-- маршрутизатор -->
   <Routes> 
   		<Route path='/' element={<h2>Homepage</h2>} /> 
   		<Route path="/about" element={<h2>About page</h2>} />
   </Routes>
3. створюємо сторінки (папка pages). в цій папці створюємо структуру
   компонентів.
4. для переходу по сторінкам додаємо Link. замість <a href="/"></a>
   використовуємо <Link to="/"></Link> або <NavLink to="/"></NavLink> (можна
   стилізувати, наприклад додати активна сторінка (5пункт))
5. <!-- стилізація активного лінка -->
   - NavLink автоматично навішує флаг isActive на кожне своє посилання; const
     buildLinkClass = ({ isActive }) => { return clsx(s.link, isActive &&
     s.active); };
6. Outlet - вказує де треба відмалювати (це children)
7. useParams() - дає можливість витягти всі параметри з :

<!-- ОБОВ'ЯЗКОВО!!! для Versel -->

8. !!!!! Рендер на Versel: -8.1. додати файл налаштувань vercel.json в кореневу
   папку проекту:
   <!-- {
     "rewrites":  [
       {"source": "/(.*)", "destination": "/"}
     ]
   } -->
   ; -8.2.git merge вказую гілку;
   <!-- Змінити назву гілки: git branch -m new-name (якщо знаходишся в даній гілці); git
       branch -m old-name new-name (якщо знаходишся в іншій гілці); -->
