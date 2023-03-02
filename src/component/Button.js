import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button({ text, onclick = null }) {
  return (
    <button className={styles.button} onClick={onclick}>
      {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onclick: PropTypes.func,
};

export default Button;
