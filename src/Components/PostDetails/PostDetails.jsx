import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();

  const { postId } = useParams();
  console.log(postId);
  const { id, title, body } = post;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h2>Post Details about: {id}</h2>
      <h1>Title: {title}</h1>
      <p>{body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetails;
