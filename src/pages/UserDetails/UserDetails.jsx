import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchUserById } from '../../services/api';

const UserDetails = () => {
  const { userId } = useParams(); // витягує айдішнік
  const [user, setUser] = useState(null);

  //кнопка Go back
  // const navigate = useNavigate(); //кнопка Go back шаг назад або на якусь сторінку
  const location = useLocation();
  console.log('location2', location);
  //поверни до мисця звідки прийшов, або до початку
  const goBackLink = useRef(location.state ?? '/users'); //useRef запише лінк при першому рендері

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
      {/* кнопка Go back*/}

      <Link to={goBackLink.current}>Go back</Link>
      <img src={user.image} />
      <h2>
        {user.lastName} {user.firstName}
      </h2>
      <nav>
        <Link to="info">Show info</Link>
        <Link to="posts">Show posts</Link>
      </nav>
      <Suspense fallback={<h2>Loading second suspense 😎</h2>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default UserDetails;
