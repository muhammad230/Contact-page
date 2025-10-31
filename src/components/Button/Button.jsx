import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";

function Button() {
  return (
    <button className={styles.btn}>
      <MdMessage />
      button
    </button>
  )
}

export default Button
