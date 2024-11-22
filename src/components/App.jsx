//components
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';

// pages
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Users from '../pages/Users/Users';
import UserDetails from '../pages/UserDetails/UserDetails';

import Aim from './NestedRoutes/Aim';
import Company from './NestedRoutes/Company';
import Team from './NestedRoutes/Team';
import Posts from './NestedRoutes/Posts';

const App = () => {
  return (
    <div>
      <Header />

      {/* маршрутизатор */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/users" element={<Users />} />
        {/* :userId - динамічний параметр */}
        <Route path="/users/:userId" element={<UserDetails />}>
          <Route path="info" element={<h2>test info</h2>} />
          <Route path="posts" element={<Posts />} />
        </Route>

        <Route path="/about" element={<About />}>
          <Route path="aim" element={<Aim />} />
          <Route path="company" element={<Company />} />
          <Route path="team" element={<Team />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
