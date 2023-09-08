import styles from './JobTimeline.module.css';

import { JOBS } from './JOBS';

const JobDisplay = props => {
    return (
        <div className={styles.main}>
            <div className={styles.header1}>
                <span>
                    <h1>{props.organization}</h1>
                    <p>{props.location}</p>
                </span>
            </div>
            <div className={styles.header2}>
                <span>
                    <h2>{props.position}</h2>
                    <p>{props.startDate} - {props.endDate}</p>
                </span>
            </div>
            <div className={styles.bullets}>
                <ul>
                    {props.bullets.map(bullet => <li>{bullet}</li>)}
                </ul>
            </div>
            {props.additional_positions &&
            <div className={styles.additional}>
                {props.additional_positions.map(pos => (
                    <span>
                        <h3>{pos.position}</h3>
                        <p>{pos.startDate} - {pos.endDate}</p>
                    </span>
                ))}
            </div>
            }
        </div>
    )
}

const JobTimeline = () => {
    return (
        <div className={styles.block}>
            {JOBS.map(job =>
                <JobDisplay
                    key={job.organization}
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