import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  // витягує айдішнік
  const { userId } = useParams();

  const [user, setUser] = useState(null);

  //рендериться після компоненту
  //як тільки поміняється userId  - зобимо ще один fetch
  useEffect(() => {
    const getData = async () => {
      const data = await fetchUserById(userId);
      setUser(data);
    };
    getData();
  }, [userId]);

  //якщо даних не має то, спочатку Loading data... потім підтягне дані
  if (!user) {
    // return <h2>Loading data...</h2>;
    return null;
  }

  return (
    <div>
      <img src={user.image} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <nav>
        <Link to="info">Show info</Link>
        <Link to="posts">Show posts</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default UserDetails;
