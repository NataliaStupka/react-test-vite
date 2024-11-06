import css from './Filter.module.css';

const Filter = ({ value, onFilter }) => {
  return (
    <div>
      <p className={css.label}>Search by name</p>
      {/* value - це стан, onChange - це сеттер */}
      <input
        type="text"
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
};

export default Filter;
