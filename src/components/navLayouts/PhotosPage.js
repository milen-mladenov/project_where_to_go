import styles from './navLayouts.module.css';
import left from '../../utility/svg/left.svg'
import right from '../../utility/svg/left.svg'
import { useState } from 'react';


const images = ['1', '2', '3', '4', '5', '6'];

export const PhotosPage = () => {

    const [currPicture, setCurrPicture] = useState(images[0]);


    function getPicture(img) {
        console.log(images.indexOf(img));
        return setCurrPicture(images[img]);
    }

    return (
        <section>
            <div className={styles.main_picture_frame}>
                <img src={left} alt='left' />
                <p>{currPicture}</p>
                <img src={currPicture} alt='img' />
                <img src={right} alt='right' />
            </div>
            <div className={styles.picture_list}>
                <ul>
                    {images.map(img => <li onClick={() => getPicture(img)}><img key={images.indexOf(img)} src={img} alt='img' /></li>)}
                </ul>
            </div>
        </section>
    )
}