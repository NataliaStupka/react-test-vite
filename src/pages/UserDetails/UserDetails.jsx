import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams(); // витягує айдішнік
  const navigate = useNavigate(); //приймає шлях

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
      {/* в navigate пишемо абсолютний шлях '/users', або піднятися на одну сходинку вище (-1) */}
      <button onClick={() => navigate(-1)}>Go back</button>
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
