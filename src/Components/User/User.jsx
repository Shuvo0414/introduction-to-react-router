import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const navigate = useNavigate();

  const handleUserDetails = () => {
    navigate(`/user/${id}`);
  };

  const userStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h2>{name}</h2>
      <p>email: {email}</p>
      <p>phone: {phone}</p>
      <Link to={`/user/${id}`}>User Details</Link>
      <button onClick={handleUserDetails}>User Details</button>
    </div>
  );
};

export default User;
