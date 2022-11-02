import styles from './StageFour.module.css';

export const StageFour = ({ nextStage, prevStage }) => {
    return (
        <div>
            <h2>StageFour</h2>
            <button className={styles.stage_button} onClick={() => prevStage()}>Back</button>
        </div>
    );
};