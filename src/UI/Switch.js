import styles from './Switch.module.css';

const Switch = () => {
    return(
        <div className={styles.container}>
            <input type="checkbox" id="check" className={styles.check}/>
            <label for="check" className={styles.button}></label>
        </div>
    )
}

export default Switch;