import styles from './navLayouts.module.css';
import left from '../../utility/svg/left.svg'
import right from '../../utility/svg/right.svg'
import { useState } from 'react';


let images = [
    'https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=730&q=80',
    'https://images.unsplash.com/photo-1667256104809-d5ef68e1a2a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2574&q=80',
    'https://images.unsplash.com/photo-1667357307700-e91503af11c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80',
    'https://images.unsplash.com/photo-1667340069304-399227380002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1667316840133-31fcbee7105a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=930&q=80',
    'https://images.unsplash.com/photo-1667312939978-64cf31718a6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'];

export const PhotosPage = () => {
    const [currIndex, setCurrIndex] = useState(0)
    const [currPicture, setCurrPicture] = useState(images[currIndex]);


    function getPicture(img) {
        let num = images.indexOf(img);

        return setCurrPicture(images[num]);
    }

    function prevPicture(currPicture) {
        let num = currIndex
        num--
        if (num < 0) {
            num = images.length - 1
        }
        setCurrIndex(num)
        console.log(currIndex);
        return setCurrPicture(images[currIndex]);
    }

    function nextPicture(currPicture) {
        let num = currIndex
        num++
        if (num >= images.length) {
            num = 0
        }
        setCurrIndex(num)
        console.log(currIndex);

        return setCurrPicture(images[currIndex]);
    }


    function test(e) {
        console.log(e);
    }
    return (
        <section>
            <div className={styles.main_picture_frame}>
                <img className={styles.picture_directions_left} onClick={() => prevPicture()} src={left} alt='left' />
                <img className={styles.targeted_img} src={currPicture} alt='img' />
                <img className={styles.picture_directions_right} onClick={() => nextPicture()} src={right} alt='right' />
            </div>
            <div className={styles.picture_list}>
                <ul>
                    {images.map(img => <li onClick={() => getPicture(img)}><img key={images.indexOf(img)} src={img} alt='img' /></li>)}
                </ul>
            </div>
        </section>
    )
}