
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Button } from '@components/Button/Button';
import { Model } from "@components/Model/Model";

import styles from './Gallery.module.css';
import img_001 from '@assets/imgs/works/001.png';
import img_002 from '@assets/imgs/works/002.png';
import img_003 from '@assets/imgs/works/003.png';

export const Gallery = () => {
    
    const [status, setStatus] = useState("close");
    const [src, setSrc] = useState("");
    
    const { gallery, imgs, img } = styles;


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
            <section className = { `${ gallery } --container` } >
                <h2>
                    <span>
                        بعض اعمال لنا
                    </span>
                </h2>

                <div className = { imgs } >
                    <div 
                    className = { img } 
                    onClick   = { () => {
                        setSrc( img_001 );
                        setStatus( "open" );
                    }}>
                        <img 
                        src = { img_001 } 
                        alt = 'our work' />
                    </div>

                    <div 
                    className = { img } 
                    onClick   = { () => {
                        setSrc( img_002 );
                        setStatus( "open" );
                    }}>
                        <img 
                        src = { img_002 } 
                        alt = 'our work' />
                    </div>

                    <div 
                    className = { img } 
                    onClick   = { () => {
                        setSrc( img_003 );
                        setStatus( "open" );
                    }}>
                        <img 
                        src = { img_003 } 
                        alt = 'our work' />
                    </div>
                </div>

                <div style = {{ textAlign: 'center' }}>

                    <Link to = "/gallery">

                        <Button  
                            text = { "شاهد المزيد" }
                            color = "black"
                            borderColor = "black"
                        />
                    </Link>
                </div>
            </section>
        </>
    );
};