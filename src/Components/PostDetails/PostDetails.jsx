import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
  const post = useLoaderData();
  const { id, title, body } = post;
  return (
    <div>
      <h2>Post Details about: {id}</h2>
      <h1>Title: {title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostDetails;
