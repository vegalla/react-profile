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
                <p>Skill Highlights</p>
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
                    Vince is an exceptionally qualified professional trained directly in best practices for cloud development by Amazon Web Services. Vince's colleagues describe him as a reliable, dedicated team member who delivers high-quality, exceptional work in all of his responsibilities. Vince works diligently to ensure excellence in his deliverables and executes with effieciency and coherence to materialize the strategic visions of the team and organization.
                </p>
            </div>
        </div>
    )
};

export default Intro;