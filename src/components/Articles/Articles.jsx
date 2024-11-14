//rafce - 'розгорнути' компонент

const Articles = ({ articles }) => {
  return (
    <div>
      <h2>Articles:</h2>
      <ul>
        {articles.map(post => (
          <li key={post.objectID}>
            {/* з бекенду може прийти title, а може і story_title та інше */}
            <a href={post.url ?? post.story_url}>
              {post.title ?? post.story_title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
