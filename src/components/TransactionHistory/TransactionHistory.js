import styles from "./TransactionHistory.module.css";
import PropTypes from "prop-types";

const TransactionHistory = ({items}) => {
    return (
      <table className={styles.transaction__history}>
        <thead className={styles.transaction__header}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody className={styles.transaction__body}>
          {items.map((item) => (
            <tr key={item.id} className={styles.transaction__item}>
              <td className={styles.transaction__type}>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
};

TransactionHistory.propTypes = {
  friends: PropTypes.array,
};

export default TransactionHistory;
