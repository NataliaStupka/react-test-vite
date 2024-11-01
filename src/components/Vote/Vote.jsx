import { useState } from 'react';

const Vote = () => {
  console.log('Голосуємо.');

  //useState це об'єкт. -= прописуємо Початкові значення =-
  const [voteData, setVoteData] = useState({
    macOS: 0,
    windows: 0,
    linux: 0,
    android: 0,
    symbian: 0,
    other: 0,
  });
  console.log('ключі:', Object.keys(voteData));
  console.log('значення:', Object.values(voteData));

  //click на кнопку vote
  const handleClickVoit = value => {
    //console.log('click Button voit', value);

    // //беремо попередня значення, розпиляємо його та замінюємо вибране значення на нове
    // if (value === 'windows') {
    //   setVoteData(prev => ({ ...prev, windows: prev.windows + 1 }));
    // }
    // if (value === 'macOS') {
    //   setVoteData(prev => ({ ...prev, macOS: prev.macOS + 1 }));
    // }
    // if (value === 'linux') {
    //   setVoteData(prev => ({ ...prev, linux: prev.linux + 1 }));
    // }

    //беремо попередня значення, розпиляємо його і значення замінюємо на нове значення
    setVoteData(prev => ({ ...prev, [value]: prev[value] + 1 }));
  };

  return (
    <div style={{ margin: '40px' }}>
      <h2>Voting list</h2>

      <ul style={{ marginBottom: '10px', color: 'red' }}>
        <li>macOS: {voteData.macOS}</li>
        <li>windows: {voteData.windows} </li>
        <li>linux: {voteData.linux} </li>
      </ul>
      {/* переписуємо */}

      <ul style={{ marginBottom: '10px' }}>
        {Object.keys(voteData).map(key => (
          <li key={key}>
            {key}: {voteData[key]}
          </li>
        ))}
      </ul>

      {/* ---===-- КНОПКИ ---===--- */}
      <section>
        {/* кнопки з voteData */}
        {Object.keys(voteData).map(key => (
          <button
            key={key}
            onClick={() => handleClickVoit(key)}
            style={{ marginRight: '10px' }}
          >
            {key}
          </button>
        ))}
      </section>
      {/* <button onClick={() => handleClickVoit('windows')}>windows:</button>
      <button onClick={() => handleClickVoit('macOS')}>macOS:</button>
      <button onClick={() => handleClickVoit('linux')}>linux:</button> */}
    </div>
  );
};

export default Vote;
