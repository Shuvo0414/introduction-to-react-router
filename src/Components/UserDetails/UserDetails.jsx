import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, website, company } = user;

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>User Details: {id}</h2>
      <p>{name}</p>
      <p>Website : {website}</p>
      <p>Company: {company.name}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default UserDetails;
