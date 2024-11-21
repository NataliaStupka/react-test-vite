import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    document.title = 'BEST CODERS | About';
  }, []);

  return <div>About</div>;
};

export default About;
