import styles from './JobTimeline.module.css';

import { JOBS } from './JOBS';


const JobDisplay = props => {


    // TODO: Add drop down functional for bullets on additional positions

    return (
        <div key={props.organization} className={styles.main}>
            <div className={styles['header1--h1']}>
                {props.organization}
            </div>
            <div className={styles['header1--p']}>
                {props.location}
            </div>
            <div className={styles['header2--h2']}>
                {props.position}
            </div>
            <div className={styles['header2--p']}>
                {props.startDate} - {props.endDate}
            </div>
            <div className={styles.bullets}>
                <ul>
                    {props.bullets.map(bullet => <li>{bullet}</li>)}
                </ul>
            </div>
            {props.additional_positions &&
                <div className={styles.additional}>
                    {props.additional_positions.map(pos => (
                        <div className={styles['n--position']} key={pos.position}>
                            <div className={styles['header3--h3']}>{pos.position}</div>
                            <div className={styles['header3--p']}>{pos.startDate} - {pos.endDate}</div>
                        </div>
                    ))}
                </div>
            }
        </div>
        // <div className={styles.main}>
        //     <div className={styles.header1}>
        //         <span>
        //             <h1>{props.organization}</h1>
        //             <p>{props.location}</p>
        //         </span>
        //     </div>
        //     <div className={styles.header2}>
        //         <span>
        //             <h2>{props.position}</h2>
        //             <p>{props.startDate} - {props.endDate}</p>
        //         </span>
        //     </div>
        //     <div className={styles.bullets}>
        //         <ul>
        //             {props.bullets.map(bullet => <li>{bullet}</li>)}
        //         </ul>
        //     </div>
        //     {props.additional_positions &&
        //     <div className={styles.additional}>
        //         {props.additional_positions.map(pos => (
        //             <span key={pos.position}>
        //                 <h3>{pos.position}</h3>
        //                 <p>{pos.startDate} - {pos.endDate}</p>
        //             </span>
        //         ))}
        //     </div>
        //     }
        // </div>
    )
}

const JobTimeline = () => {
    return (
        <div className={styles.block}>
            {JOBS.map(job =>
                <JobDisplay
                    position={job.position}
                    startDate={job.startDate}
                    endDate={job.endDate}
                    organization={job.organization}
                    location={job.location}
                    bullets={job.bullets}
                    additional_positions={job.additional_positions}
                />
            )}
        </div>
    )
}

export default JobTimeline;