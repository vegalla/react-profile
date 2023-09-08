import styles from './Intro.module.css';

import imgProfilePicture from '../Assets/Self/profile-picture.jpg';

const Intro = () => {
    return (
        <div className={styles.main}>
            <div className={styles.profile}>
            <span className={styles.description}>
                <h1>Vince Egalla</h1>
                <h2>Data Science | Cloud Development | Data Engineering</h2>
                <h3>Wahoowa! Hoya Saxa!</h3>
                <p>Skills</p>
                <ul>
                    <li>AWS Cloud Development</li>
                    <li>Machine Learning with Python</li>
                    <li>Databricks Data Engineering</li>
                    <li>Causal Analysis in SAS/R/Python</li>
                    <li>Natural Langugage Processing | Internet-of-Things</li>
                </ul>
            </span>
            <span className={styles.picture}>
                <img src={imgProfilePicture} alt="" />
            </span>
            </div>
            <div className={styles.summary}>
                <p>
                    Here lies a summary of Vince Egalla
                </p>
            </div>
        </div>
    )
};

export default Intro;