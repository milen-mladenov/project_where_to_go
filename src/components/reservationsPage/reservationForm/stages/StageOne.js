import styles from './StageOne.module.css';

export const StageOne = ({ nextStage, resHandler }) => {
    return (
        <div>
            <h2>StageOne</h2>
            <button className={styles.stage_button} onClick={() => nextStage()}>Next</button>
        </div>
    );
};