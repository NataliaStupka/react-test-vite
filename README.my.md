# react-test-vite

<!-- rafce - 'розгорнути' компонент -->

1. useMemo
   <!-- те, що буде в useMemo, без зміни: виконається, запам'ятає і буде ввідавати без перерендеру наступні рази
   const result = useMemo(() => {}, []); -->
   <!--  -->
2. useRef - для зв'зання з елементом в домі, такий як document.querySelector в
   js 3. forwardRef - взаємодия з компоненнтом, який є вкладенний
   <!--  -->
3. useContexst (передача пропса з батьківського компонента зразу куди потрібно)
   (3.1.) в папці src створюємо папку context, в ній створюємо файл
   AuthProvider.jsx (компонент). Огортаємо AuthProvider -ом App в main.jsx;
   (3.2.) в AuthProvider прописуємо createContext i обгортаємо
   <authContext.Provider>{children}</authContext.Provider>;
   <!-- ==useContexst-=-=-= -->
   В стороні винесена логіка (AuthProvider.jsx). AuthProvider-ом огорнули App в
   main елемент(все що є в App буде мати доступ до контекста). App - children.
   <!--  -->
4. customHooks. власні хуки: створюємо папку hooks. Наприклад створити
   useToogle, для перевикористання модального вікна

 <!-- useState, useEffect (читається після монтажу); -->

<!-- Змінити назву гілки: git branch -m new-name (якщо знаходишся в даній гілці); git
branch -m old-name new-name (якщо знаходишся в іншій гілці); -->

5. Створення власних СНІПЕТІВ: File -> Preferences -> Configure Snippets --
Наприклад rafce:
<!-- "rafc": {
		"prefix": "rafc",
		"body": [
			"export const ${TM_FILENAME_BASE} = () => {",
			"  return <div>${1}</div>",
			"}"
		],
		"description": "Create custom element"
	},
	"rafce": {
		"prefix": "rafce",
		"body": [
			"const ${TM_FILENAME_BASE} = () => {",
			"  return <div>${1}</div>",
			"}",
			"export default ${TM_FILENAME_BASE}"
		],
		"description": "Create custom element export default"
	}, -->
