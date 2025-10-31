import styles from "./Button.module.css"
import { MdMessage } from "react-icons/md";

function Button(props) {
  return (
    <button className={props.isnew ? styles.new_btn : styles.btn}>
     {props.icon}
     {props.text}
    </button>
  )
}

export default Button
