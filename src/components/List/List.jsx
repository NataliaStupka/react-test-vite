import s from './List.module.css';

const List = ({ data, title }) => {
  console.log(data, title);

  return (
    <div>
      <h2 className={s.film_title}>{title}</h2>
      <ul>
        {data.map(item => (
          <section key={item.id}>
            <li>
              {item.title} <button className={s.button}>Delete</button>
            </li>
          </section>
        ))}
      </ul>
    </div>
  );
};
export default List;
