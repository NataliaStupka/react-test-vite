import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link, useSearchParams } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getData(); //викликаємо
  }, []);

  //віддай query, якщо нічого не повернеться то додай порожню строку
  const query = searchParams.get('query') ?? '';

  const filteredData = users.filter(user =>
    user.firstName.toLowerCase().includes(query.toLowerCase())
  );

  //запише в url значення query і те, що прийде з форми set, а зчитаємо через get
  const handleSetQurey = newValue => {
    //Встановлює в url те, що написали в set: query, значення
    searchParams.set('query', newValue);

    setSearchParams(searchParams);
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
