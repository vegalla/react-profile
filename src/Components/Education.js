import styles from './Education.module.css';

const Education = () => {
    return (
        <div className={styles.main}>
            <span className={styles.mainLeft}>
                <h1>University of Virginia</h1>
                <h2>Bachelor's in Economics</h2>
                <p>2013-2017</p>
            </span>
            <span className={styles.mainRight}>
                <h1>Georgetown University</h1>
                <h2>Master's in Data Science</h2>
                <p>2020-2022</p>
            </span>
        </div>
    )
};

export default Education;