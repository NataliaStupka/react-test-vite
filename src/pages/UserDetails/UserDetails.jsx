const UserDetails = () => {
  // витягує айдішнік
  const { userId } = useParams();

  return <div>UserDetails #{userId}</div>;
};

export default UserDetails;
