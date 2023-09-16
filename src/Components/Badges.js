import styles from './Badges.module.css';

import badgeAssociateDeveloper from '../Assets/Badges/associate-developer.png';
import badgeAssociateSolutionsArchitect from '../Assets/Badges/associate-solutions-architect.png';
import badgeSpecialtyDataAnalytics from '../Assets/Badges/specialty-data-analytics.png';
import badgeSpecialtyMachineLearning from '../Assets/Badges/specialty-machine-learning.png';

import Tooltip from '../UI/Tooltip';

const BADGES = [
    {
        image: badgeAssociateDeveloper,
        issueDate: "March 26, 2023",
        validation: "54E7BESC7B11QDW2",
        alt:"Credly AWS Developer Associate Badge",
    },
    {
        image: badgeAssociateSolutionsArchitect,
        issueDate: "August 26, 2022",
        validation: "6QEX30EC52411PG1",
        alt:"Credly AWS Solutions Architect Associate Badge",
    },
    {
        image: badgeSpecialtyDataAnalytics,
        issueDate: "June 30, 2023",
        validation: "2CEHYRS28J41QG5R",
        alt:"Credly AWS Data Analytics Specialty Badge",
    },
    {
        image: badgeSpecialtyMachineLearning,
        issueDate: "October 12, 2022",
        validation: "2E6SHLK2YFFE1T95",
        alt:"Credly AWS Machine Learning Specialty Badge",
    },

];

const Explainer = (issueDate, validation) => {
    return (
        <div>
            <p>Obtained on {issueDate}</p>
            <p>Validation Code: {validation}</p>
        </div>
    )
};

const Badges = () => {
    return (
        <div className={styles.main}>
            {BADGES.map(badge => (
                <span key={badge.validation} className={styles.badge}>
                    <Tooltip tooltipContent={Explainer(badge.issueDate, badge.validation)}>
                        <img src={badge.image} alt={badge.al} loading="lazy"/>
                    </Tooltip>
                </span>
            ))}
        </div>
    )
};

export default Badges;