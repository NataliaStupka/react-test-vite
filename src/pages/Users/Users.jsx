import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState(''); //для фільтрування тільки тих, що входять у список співпадінь з нашим словом

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData(); //викликаємо
  }, []);

  const filteredData = users.filter(user =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );

  const handleSetQurey = newValue => {
    setQuery(newValue);
  };

  return (
    <div>
      <h1>Users:</h1>
      {/* пошук */}
      <SearchBar handleSetQuery={handleSetQurey} />
      <ul>
        {filteredData.map(user => (
          <li key={user.id}>
            {/* посилання повинно бути строкою, тому id прводимо до строки .toString() */}
            <Link to={user.id.toString()}>
              <p>
                {/* &nbsp; - пробіл */}
                {user.firstName} &nbsp;
                {user.lastName}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
