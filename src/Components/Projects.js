import styles from './Projects.module.css';

const Projects = () => {
    return (
        <div className={styles.main}>
            <h1>Projects</h1>
            <ul>
                <li>Generative Art with P5.js</li>
                <li>Graph Machine Learning Introduction</li>
                <li>Geospatial Projections in D3.js</li>
            </ul>
        </div>
    );
};

export default Projects