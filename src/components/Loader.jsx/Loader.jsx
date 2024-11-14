import { Comment } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div>  <Comment
    visible={true}
    height="50"
    width="50"
    ariaLabel="comment-loading"
    wrapperStyle={{}}
    wrapperClass="comment-wrapper"
    color="#fff"
    backgroundColor="#f42ec6"
    /></div>
  )
}

export default Loader