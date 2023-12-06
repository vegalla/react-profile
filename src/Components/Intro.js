import styles from './Intro.module.css';

import imgProfilePicture from '../Assets/Self/profile-picture.jpg';
import imgProfilePictureSm from '../Assets/Self/profile-picture-small.jpg';

import { useState } from 'react';

const Intro = () => {
    const [loading, setLoading] = useState(true);

    // const onLoad = () => {
    //     console.log("loaded");
    //     // const name = document.querySelectorAll('blurLoad')
    //     // console.log(name);
    //     setLoading(false);
    // }
    
    // TODO: Remove float up animation for mobile perspective

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
                    <div className={styles.blurLoad} style={{ backgroundImage: `url(${imgProfilePictureSm}`, }}>
                        <img src={imgProfilePicture} alt="" loading="lazy" onLoad={() => setLoading(false)} style={{ opacity: loading ? "0" : "1" }} />
                    </div>
                </span>
            </div>
            <div className={styles.summary}>
                <p>
                    Stemming from his family's history with the Navy, Vince is impassioned towards public interest techology and advancing modernization at all levels of government. Stories of IT modernization, such as <a href="https://aws.amazon.com/blogs/publicsector/helping-agencies-improve-customer-experience-benefits-eligibility-enrollment/">taking state unemployment services online with the cloud</a> to cases described by <a href="https://www.newamerica.org/pit/power-to-the-public-the-promise-of-public-interest-technology/">Hana Schank and Tara Dawson McGuinness' book <i>Power to the Public</i></a>, galvanize Vince towards continuous learning with technologies from machine learning to cloud development.
                </p>
            </div>
        </div>
    )
};

export default Intro;