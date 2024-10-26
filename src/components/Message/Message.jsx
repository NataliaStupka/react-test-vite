import { FcApproval } from 'react-icons/fc';
import s from './Message.module.css';

const Message = ({ author = 'Default author', text }) => {
  return (
    <div>
      <h4 className={s.title}>
        {text} <FcApproval className={s.icon} />
      </h4>
      <span>{author}</span>
    </div>
  );
};
export default Message;
