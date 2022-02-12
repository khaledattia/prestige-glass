import { SubPage } from '@components/Layout/Layout';
import styles from './Gallery.module.css';
import img_01 from '@assets/imgs/gallery/001.png';
import img_02 from '@assets/imgs/gallery/002.png';
import img_03 from '@assets/imgs/gallery/003.png';
import img_04 from '@assets/imgs/gallery/004.png';
import img_05 from '@assets/imgs/gallery/005.png';
import img_06 from '@assets/imgs/gallery/006.png';
import img_07 from '@assets/imgs/gallery/007.png';
import img_08 from '@assets/imgs/gallery/008.png';
import { imgs } from './imgs';



const Gallery = () => {
    const {
        galley_container,
        row,
        col,
        card,
        header_background
    } = styles;
    
    return (
        <>
        <SubPage pageTitle = "معرض الصور" className = { header_background } />

            <div className = { galley_container } >

            <div  className = { row } >
                {imgs.map((src, i) => (
                    <div className = { col } key = { i } >

                        <div className = { card }>
                            <img src = { src } />
                        </div>

                    </div>
                ))}
            </div>

        </div>
        </>
    );
};

export default Gallery;