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
          <tr className={styles.transaction__item}>
            <td key={item.id}>{item.type}</td>
            <td key={item.id}>{item.amount}</td>
            <td key={item.id}>{item.currency}</td>
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

//item ma się zaczynać od wyrówniania w lewo!