import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'BEST CODERS | HOME';
  }, []);

  return <div>Home</div>;
};

export default Home;
