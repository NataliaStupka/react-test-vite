import { useEffect, useState } from 'react';
import { fetchUsers } from '../../services/api';
import { Link } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchUsers();
      console.log(data);
      setUsers(data);
    };
    getData(); //викликаємо
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
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
