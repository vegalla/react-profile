import styles from './Badges.module.css';

import badgeAssociateDeveloper from '../Assets/Badges/associate-developer.png';
import badgeAssociateSolutionsArchitect from '../Assets/Badges/associate-solutions-architect.png';
import badgeSpecialtyDataAnalytics from '../Assets/Badges/specialty-data-analytics.png';
import badgeSpecialtyMachineLearning from '../Assets/Badges/specialty-machine-learning.png';


const Badges = () => {
    return (
        <div className={styles.main}>
            <span className={styles.badge}>
                <img src={badgeAssociateDeveloper} alt="" />
            </span>
            <span className={styles.badge}>
                <img src={badgeAssociateSolutionsArchitect} alt="" />
            </span>
            <span className={styles.badge}>
                <img src={badgeSpecialtyDataAnalytics} alt="" />
            </span>
            <span className={styles.badge}>
                <img src={badgeSpecialtyMachineLearning} alt="" />
            </span>
        </div>
    )
};

export default Badges;