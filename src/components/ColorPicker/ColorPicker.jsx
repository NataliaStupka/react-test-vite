import { useState } from 'react';
import colors from '../../assets/colors.json'; //кольори
import s from './ColorPicker.module.css'; //стилі

const ColorPicker = () => {
  const [currentColor, setCurentColor] = useState('orange'); //початково обранний колір - orange (currentColor)
  //console.log('currentColor:', currentColor);
  return (
    // змінюємо колір background на обранний колір
    <section style={{ backgroundColor: currentColor }} className={s.bgWrapper}>
      <div className={s.pallette}>
        <h2>Current color: {currentColor}</h2>
        <ul className={s.list}>
          {colors.map(item => (
            <li
              className={s.item}
              key={item.id}
              onClick={() => {
                console.log('CLICK on', item.color);
                setCurentColor(item.color); //змінює currentColor на обранний
              }}
            >
              {item.color}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ColorPicker;
