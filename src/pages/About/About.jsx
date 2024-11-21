import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = 'BEST CODERS | About';
  }, []);

  return (
    <div>
      <h2>About page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nemo,
        recusandae minus vel a error sit maiores? Vero at ducimus, modi saepe
        iusto nesciunt blanditiis exercitationem culpa expedita dolore dolorum.
      </p>
      <nav
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '5px',
          color: 'tomato',
        }}
      >
        <NavLink to="team">Team</NavLink>
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="company">Company</NavLink>
      </nav>
      {/* де відмалювати  NavLink*/}
      <div style={{ backgroundColor: 'yellow', width: '40vw', height: '40vh' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default About;
