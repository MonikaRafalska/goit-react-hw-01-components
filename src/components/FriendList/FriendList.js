import styles from "./FriendList.module.css";
import PropTypes from "prop-types";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <span
            className={friend.isOnLine ? styles.status__on : styles.status__off}>
           </span>
          <img
            className={styles.avatar}
            src={friend.avatar}
            alt={friend.name + "avatar"}
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;

//do dopracowania zmiana kolorku statusu!!!!!!!!!!!!!!!