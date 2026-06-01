import { useLoaderData, useParams } from "react-router-dom";
import styles from './User.module.css';

const User = () => {

  const data = useLoaderData();
  const { userId } = useParams();

  if (!data) {
    return <div>Loading...</div>
  }
  
  return (
    <div className={styles.userContainer}>

      <div>
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>UserId:</strong> {typeof userId} {userId}<span>(from useparams)</span></p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Website:</strong> {data.website}</p>
        <p><strong>Company:</strong> {data.company.name}</p>
        <p><strong>Address:</strong> {data.address.street}, {data.address.city}, {data.address.zipcode}</p>
      </div>

    </div>
  );
}
export default User;