//rafce - 'розгорнути' компонент




const Articles = ({ articles }) => {


  return (
    <div>
     
      <ul>
        {articles.map(post => (
          <li
            key={post.objectID}
            style={{ border: '1px solid pink', marginBottom: '5px' }}
          >
            <a href={post.url}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
