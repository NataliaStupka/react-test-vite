import { useSelector } from "react-redux";
import Item from "./Item";
import s from "./TodoList.module.css";

import { selectFilter, selectFilteredTasksMemo } from "../../redux/selectors";

export const List = () => {
  const todos = useSelector(selectFilteredTasksMemo);

  //для рендера не просто todos, а і відфільтрованого
  const filter = useSelector(selectFilter); //по чому фільтруємо (з selectors в якому selectFilter = state => state.todos.filter)
  const filterData = todos.filter((item) =>
    item.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.list}>
      {filterData.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </ul>
  );
};
