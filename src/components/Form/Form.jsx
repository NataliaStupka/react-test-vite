// ControlledForm --------
//створюємо state, часто об'єкт
//input пов'язуємо зі state (value - onChange)
import { useState } from 'react';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  age: '',
  country: '',
  about: '',
  gender: 'male',
  agree: false,
};
const Form = () => {
  //створюємо state
  //зв'язуємо ці дані з інпутами, а інпути з данимі (змінюємо - зберігаємо)
  //input пов'язуємо зі state (value - onChange)
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData); //збираємо дані

    // очищаємо форму
    setFormData(INITIAL_STATE);
  };

  //input пов'язуємо зі state. Передамо на інпут через onCange
  //   const handleChangeUsernameField = e => {
  //     setFormData(prev => ({ ...prev, username: e.target.value }));
  //   };
  //   const handleChangeEmailField = e => {
  //     setFormData(prev => ({ ...prev, email: e.target.value }));
  //   };
  //   const handleChangePasswordField = e => {
  //     setFormData(prev => ({ ...prev, password: e.target.value }));
  //   };

  //=-- Універсальний обробник input --=
  const handleChangeInput = e => {
    //куди стали і де змінюємо [e.target.name], value - його значення
    const { name, value, type } = e.target; // дестриктуризація

    //логіка для checkbox (if)
    if (type === 'checkbox') {
      return setFormData({ ...formData, [name]: !formData[name] }); //зроби протилежне від того що було (як false, то буде true і навпаки)
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name:</span>
          {/* пропс value вказує що потрібно ссилатися на  formData.username*/}
          {/* НАЗВА name ПОВИННА БУТИ  ТАКА ЯК value */}
          <input
            value={formData.username} //1 пов'язуємо з 2
            onChange={handleChangeInput} //2
            name="username"
            type="text"
            placeholder="name"
          />
        </label>

        <label>
          <span>Email:</span>
          <input
            value={formData.email} //1
            onChange={handleChangeInput} //2
            name="email"
            type="text"
            placeholder="email"
          />
        </label>

        <label>
          <span>Password:</span>
          <input
            value={formData.password} //1
            onChange={handleChangeInput} //2
            name="password"
            type="password"
            placeholder="password"
          />
        </label>

        <label>
          <span>Age:</span>
          <input
            value={formData.age} //1
            onChange={handleChangeInput} //2
            name="age"
            type="number"
            placeholder="Age"
          />
        </label>

        {/* select */}
        <label>
          <span>Country:</span>
          <select
            value={formData.country} //1
            onChange={handleChangeInput} //2
            name="country"
          >
            <option value="Ukrain">Ukrain</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </label>

        {/* textarea */}
        <label>
          <span>About me:</span>
          <textarea
            value={formData.about} //1
            onChange={handleChangeInput} //2
            name="about"
            placeholder="About me"
          />
        </label>

        {/* radio-buttom */}
        <label>
          <input
            onChange={handleChangeInput}
            name="gender"
            type="radio"
            value="male"
            checked={formData.gender === 'male'}
          />
          Male
        </label>
        <label>
          <input
            onChange={handleChangeInput}
            name="gender"
            type="radio"
            value="female"
            checked={formData.gender === 'female'}
          />
          Female
        </label>

        {/* checkbox, оброблюються по іншому, додаємо перевірку в handleChangeInput*/}
        <label>
          <input
            onChange={handleChangeInput}
            checked={formData.agree}
            name="agree"
            type="checkbox"
          />
          I agree with rules! Continue!
        </label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Form;
