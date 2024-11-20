import ChildTwo from './ChildTwo';
import s from './Example.module.css';

const ChildOne = ({ auto }) => {
  return (
    <div className={s.one}>
      <h2>Child One</h2>
      <ChildTwo auto={auto} />
    </div>
  );
};
export default ChildOne;
