import { SubPage } from '@components/Layout/Layout';
import styles from './Gallery.module.css';
import img_01 from '@assets/imgs/gallery/001.jpg';
import img_02 from '@assets/imgs/gallery/002.jpg';
import img_03 from '@assets/imgs/gallery/003.jpg';
import img_04 from '@assets/imgs/gallery/004.jpg';
import img_05 from '@assets/imgs/gallery/005.jpg';
import img_06 from '@assets/imgs/gallery/006.jpg';
import img_07 from '@assets/imgs/gallery/007.jpg';
import img_08 from '@assets/imgs/gallery/008.jpg';

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
                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_01 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_02 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_03 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_04 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_05 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_06 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_07 } />
                    </div>

                </div>

                <div className = { col } >

                    <div className = { card }>
                        <img src = { img_08 } />
                    </div>

                </div>
            </div>

        </div>
        </>
    );
};

export default Gallery;