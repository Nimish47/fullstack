import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

function Card({ userId, id, title, body }: Post) {

  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`${id}`)
  };

  return (
    <div className={styles.card} onClick={handleClick} >
      <div className={styles.card__meta}>
        <span>User {userId}</span>
        <span>#{id}</span>
      </div>

      <h3 className={styles.card__title}>{title}</h3>

      <p className={styles.card__body}>{body}</p>
    </div>
  );
}

export default Card;