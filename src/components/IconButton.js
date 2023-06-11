import styles from "./IconButton.module.css";

function IconButton({ name, icon, color }) {
  return (
    <button id={name} name={name} className={styles.iconBtn}  style={{backgroundColor: color}}>
      {icon}
    </button>
  );
}

export default IconButton;
