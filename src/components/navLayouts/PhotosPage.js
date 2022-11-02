import styles from './navLayouts.module.css';
import left from '../../utility/svg/left.svg'
import right from '../../utility/svg/right.svg'
import { useState, useRef } from 'react';
import { images } from '../../utility/images';


export const PhotosPage = () => {
    const [currIndex, setCurrIndex] = useState(0)
    const [currPicture, setCurrPicture] = useState(images[currIndex]);

    const myRef = useRef(null)

    const executeScroll = () => myRef.current.scrollIntoView()

    function getPicture(img) {
        let num = images.indexOf(img);
        executeScroll()
        return setCurrPicture(images[num]);
    }

    function prevPicture() {
        let num = currIndex
        num--
        if (num < 0) {
            num = images.length - 1
        }
        setCurrIndex(num)
        return setCurrPicture(images[currIndex]);
    }

    function nextPicture() {
        let num = currIndex
        num++
        if (num >= images.length) {
            num = 0
        }
        setCurrIndex(num)
        return setCurrPicture(images[currIndex]);
    }


    function test(e) {
        console.log(e);
    }
    return (
        <section>
            <div className={styles.main_picture_frame} ref={myRef}>
                <img className={styles.picture_directions_left} onClick={() => prevPicture()} src={left} alt='left' />
                <img className={styles.targeted_img} src={currPicture} alt='img' />
                <img className={styles.picture_directions_right} onClick={() => nextPicture()} src={right} alt='right' />
            </div>
            <div className={styles.picture_list}>
                <ul>
                    {images.map(img => <li key={images.indexOf(img) + Math.random(.5) + '000'} onClick={() => getPicture(img)}><img src={img} alt='img' /></li>)}
                </ul>
            </div>
        </section>
    )
}