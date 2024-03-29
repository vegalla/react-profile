import styles from './Projects.module.css';

// import { Link } from 'react-router-dom';

const PROJECTS = [
    {
        label: "Generative Art",
        description: "Art created with code using P5.js. Adapted from the work of thedotisblack",
        thumbnail: "01",
        link: "/react-processing",
    },
    {
        label: "Graph Machine Learning",
        description: "Scrolling webpage to introduce graph machine learning concepts using the DMV metro system as a graph",
        thumbnail: "georgetown",
        link: "/georgetown",
    },
    {
        label: "Geospatial Visualization",
        description: "Projection of the state of Virginia using D3.js, displaying population per county",
        thumbnail: "geospatial",
        link: "/geospatial",
    }
]


const Projects = () => {
    return (
        <div className={styles.main}>
            <h1>Coding Projects</h1>
            <div className={styles.projectContainer}>
                {PROJECTS.map(proj =>
                    // <Link to={proj.link}>
                    <a href={`https://vegalla.github.io${proj.link}`}>
                        <div key={proj.label} className={styles.project}>
                            <img className={styles.thumbnail} src={require(`../Assets/Thumbnails/${proj.thumbnail}.png`)} alt="" loading="lazy"/>
                            <div className={styles.label}>{proj.label}</div>
                            <div className={styles.description}>{proj.description}</div>
                        </div>
                    </a>
                    // </Link>
                )}
            </div>
        </div>
    );
};

export default Projects