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
                <div className={styles.skills}>Skill Highlights</div>
                <ul>
                    <li>AWS Cloud Development</li>
                    <li>Machine Learning with Python</li>
                    {/* <li>Databricks Data Engineering</li> */}
                    <li>Statistical Analysis in SAS/R/Python</li>
                    <li>Natural Langugage Processing | Internet-of-Things</li>
                </ul>
            </span>
            <span className={styles.picture}>
                <img src={imgProfilePicture} alt="" />
            </span>
            </div>
            <div className={styles.summary}>
                <p>
                    Stemming from his family's history with the Navy, Vince is impassioned towards public interest techology and advancing modernization at all levels of government. Stories of IT modernization such as state unemployment websites with AWS to cases described by Hana Schank and Tara Dawson McGuinness' book <i>Power to the Public</i>, galvanize Vince towards continuous learning with technologies from machine learning to cloud development.
                </p>
            </div>
        </div>
    )
};

export default Intro;