import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleClickToSeeBtn = () => {
    navigate(`/post/${id}`);
  };
  const postStyle = {
    border: "2px solid red",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={postStyle}>
      <h4>Post of:{id}</h4>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <button onClick={handleClickToSeeBtn}>Click to see details</button>
    </div>
  );
};

export default Post;
