const User = ({ params }: { params: { user: string } }) => {
  const { user } = params;
  return <h1>User Profile : {user}</h1>;
};
export default User;
