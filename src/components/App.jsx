import Button from './Button/Button'; //component
import Header from './Header/Header'; //component
import List from './List/List'; //component
import Modal from './Modal/Modal';
import Message from './Message/Message';

import filmsData from '../assets/filmsData.json';

function App() {
  const isOnline = false; //
  const isLoading = false; //
  const age = 44; //

  const goodsData = [
    {
      id: '1',
      title: 'Морква',
    },

    {
      id: '2',
      title: 'Капуста',
    },
    {
      id: '5',
      title: 'Банку огірків',
    },
    {
      id: '3',
      title: 'Iphone',
    },
  ];

  return (
    <div style={{ marginLeft: '20px' }}>
      <Header />

      {/* Рендер по умові */}
      {isOnline && <h1>Welcome back!</h1>}
      {isLoading && <h2>Loading...</h2>}
      {age > 18 ? (
        <h2 className="title">Ти диви який вимахав! Вже {age}.</h2>
      ) : (
        <h2>Йди їж кашу, тобі ще не має {age}.</h2>
      )}

      <List title="My films" data={filmsData} />
      <List title="Goods" data={goodsData} />

      <Button>Click</Button>
      <Button>Пошук</Button>
      <Button>Відправити</Button>

      <Modal title="Messages box:">
        <Message classn text="Куплю праску!" author="Олена" />
        <Message text="Продам телевізор" author="Макс" />
        <Message text="Куплю шапку" author="Ігор" />
      </Modal>

      <Modal title="Login">
        <input />
        <input />
        <button>CLICK</button>
      </Modal>
    </div>
  );
}

export default App;
