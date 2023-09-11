import styles from './Projects.module.css';

import imgTdib01 from '../Assets/Thumbnails/01.png';
import logo from '../logo.svg';
import imgGeorgetown from '../Assets/Thumbnails/georgetown.png';

const PROJECTS = [
    {
        label: "Generative Art",
        description: "Art created with code using P5.js. Adapted from the work of thedotisblack",
        thumbnail: { imgTdib01 },
        link: "",
    },
    {
        label: "Graph Machine Learning",
        description: "Scrolling webpage to introduce graph machine learning concepts using the DMV metro system as a graph",
        thumbnail: { imgGeorgetown },
        link: "",
    },
    {
        label: "Geospatial Visualization",
        description: "Projection of the state of Virginia using D3.js, displaying population per county",
        thumbnail: { imgTdib01 },
        link: "",
    }
]


const Projects = () => {
    return (
        <div className={styles.main}>
            <h1>Coding Projects</h1>
            {PROJECTS.map(proj =>
                <div key={proj.label} className={styles.container}>
                    <img className={styles.thumbnail} src={proj.thumbnail} alt="" />
                    <div className={styles.label}>{proj.label}</div>
                    <div className={styles.description}>{proj.description}</div>
                </div>
            )}
        </div>
    );
};

export default Projects