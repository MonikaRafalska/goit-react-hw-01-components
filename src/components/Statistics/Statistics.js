import styles from "./Statistics.module.css";
import PropTypes from "prop-types";

function getRandomHexColor() {
  // return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  //rgb cute pastel color generator
  let r = (Math.round(Math.random() * 127) + 127).toString(16);
  let g = (Math.round(Math.random() * 127) + 127).toString(16);
  let b = (Math.round(Math.random() * 127) + 127).toString(16);
  return "#" + r + g + b;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.stat__list}>
        {stats.map((stat) => (
          <li
            key={stat.id}
            className={styles.item}
            style={{ backgroundColor: getRandomHexColor() }}>
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
