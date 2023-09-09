import styles from './TooltipContent.module.css';

const TooltipContent = ({
    show,
    children,
    top,
    left,
}) => {
    return (
        <div
            className={show ? styles.block : styles.hidden}
            style={{
                top: top,
                left: left,
            }}
        >
            {children}
        </div>
    )
};

export default TooltipContent;