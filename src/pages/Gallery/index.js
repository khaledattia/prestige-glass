import { useState } from 'react';
import { SubPage } from '@components/Layout/Layout';
import { Model } from '@components/Model/Model';
import { map } from '@utils/helpers/map';

import styles from './Gallery.module.css';
import { Img } from './Img';

const Gallery = () => {
    const [status, setStatus] = useState("close");
    const [src, setSrc] = useState("");

    const {
        galley_container,
        row,
        header_background
    } = styles;
    

    return (
        <>
            {
                status === "open" ? 
                <Model 
                set       = { setSrc }
                status    = { status } 
                setStatus = { setStatus } 
                src       = { src } /> 
                : <></>
            }
        
            <SubPage pageTitle = "معرض الصور" className = { header_background } />

            <div className = { galley_container } >
                <div  className = { row } >

                    { map(58, ( link, i ) => (
                        <Img 
                        key       = { i } 
                        link      = { link } 
                        set       = { setSrc } 
                        setStatus = { setStatus } />
                    ))}

                </div>
            </div>
        </>
    );
};

export default Gallery;