import styles from './Button.module.css';

function Button({name, text, handleClick, color}){
    console.log(color);
    return(
        <button id={name} name={name} onClick={handleClick} className={styles.btn} style={{backgroundColor: color}}>{text}</button>
    )
}

export default Button