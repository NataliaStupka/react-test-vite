//components
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import NotFound from '../pages/NotFound/NotFound';
import Aim from './NestedRoutes/Aim';
import Company from './NestedRoutes/Company';
import Team from './NestedRoutes/Team';

const App = () => {
  return (
    <div>
      <Header />

      {/* маршрутизатор */}
      <Routes>
        <Route path="/" element={<Home />} />
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
