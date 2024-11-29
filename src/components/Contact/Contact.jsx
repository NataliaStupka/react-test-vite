import s from './Contact.module.css';
//import PropTypes from "prop-types";

import { FaUser } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/action';

//        приходе контакт {id, name, number}
const Contact = ({ data: { id, name, number } }) => {
  //
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

// Contact.propTypes = {
//   onDelete: PropTypes.func.isRequired,
// };

export default Contact;
