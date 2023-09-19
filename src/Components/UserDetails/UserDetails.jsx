import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { id, name, website, company } = user;

  return (
    <div>
      <h2>User Details: {id}</h2>
      <p>{name}</p>
      <p>Website : {website}</p>
      <p>Company: {company.name}</p>
    </div>
  );
};

export default UserDetails;
