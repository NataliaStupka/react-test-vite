# react-test-vite

<!-- rafce - 'розгорнути' компонент -->

<!-- Навігація -->

1. Пошук: компонент SearchBar
2. SearchParams() - має set і get. Щось схоже на сберігання даних, як
   LocalSrorage, але доступ отримаємо на будь-якому девайсі. Можна зберегти url
   (http://localhost:5173/users?query=av) і там зберегти, наприклад,
   відфільтровані дані
3. Кнопка Go back (потрібен у деяких випадках: напр. коли хочемо зробити
навігацію програмну, або по умові та ін.):
<!-- const navigate = useNavigate(); //приймає шлях
<button onClick={() => navigate(-1)}>Go back</button> -->
4.

<!-- Маршрутизація -->

4. React не має власний маршрутизатор. Встановлюємо маршрутизатор React Router
   (npm install react-router-dom). Для запуску маршрутизатора огортаєм в main
   <BrowserRouter><App /></BrowserRouter>

5. в App:
   <!-- маршрутизатор -->
   <Routes> 
   		<Route path='/' element={<h2>Homepage</h2>} /> 
   		<Route path="/about" element={<h2>About page</h2>} />
   </Routes>
6. створюємо сторінки (папка pages). в цій папці створюємо структуру
   компонентів.
7. для переходу по сторінкам додаємо Link. замість <a href="/"></a>
   використовуємо <Link to="/"></Link> або <NavLink to="/"></NavLink> (можна
   стилізувати, наприклад додати активна сторінка (5пункт))
8. <!-- стилізація активного лінка -->
   const buildLinkClass = ({ isActive }) => { return clsx(s.link, isActive &&
   s.active); };
9. Outlet - вказує де треба відмалювати (це children)
10. useParams() - дає можливість витягти всі параметри з :

<!-- ОБОВ'ЯЗКОВО!!! для Versel якщо є маршрутизація-->

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
