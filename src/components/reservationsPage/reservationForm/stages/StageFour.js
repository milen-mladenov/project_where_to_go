import styles from './StageFour.module.css';

export const StageFour = ({ prevStage, resHandler }) => {
    return (
        <div>
            <h2>StageFour</h2>
            <button className={styles.stage_button} onClick={() => prevStage()}>Back</button>
        </div>
    );
};