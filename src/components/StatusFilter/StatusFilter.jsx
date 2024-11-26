import { Button } from '../Button/Button';
import css from './StatusFilter.module.css';

import { useSelector, useDispatch } from 'react-redux'; // 1. Імпортуємо хук (отримаємо дані зі стору/ відправити екшен)
// 2.2. Імпортуємо фабрику екшену
import { setStatusFilter } from '../../redux/actions';

export const StatusFilter = () => {
  // 3.2 Отримуємо посилання на функцію відправки екшенів
  const dispatch = useDispatch();

  //Компоненту StatusFilter потрібно значення фільтра з властивості status стану Redux, тому функція-селектор виглядатиме як state => state.filters.status.
  // 2.1 Отримуємо значення фільтра із стану Redux
  const filter = useSelector(state => state.filters.status);

  // 4.2 Викликаємо фабрику екшену та передаємо значення фільтра
  // 5.2 Відправляємо результат - екшен зміни фільтра
  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === 'all'}
        onClick={() => handleFilterChange('all')}
      >
        All
      </Button>
      <Button
        selected={filter === 'active'}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </Button>
      <Button
        selected={filter === 'completed'}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </Button>
    </div>
  );
};
