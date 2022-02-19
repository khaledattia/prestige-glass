
import { useEffect, useState } from 'react';
import styles from './ErrorMessage.module.css';


export default function ErrorMessage({ message, color, classes, icon }) {
    const { network_error } = styles;


    return (

        <div className = { `${ network_error } ${ classes }` } 
        style = {{ 
            borderLeft: `5px solid ${color}`, 
            color,
        }}>
            <div>
                { icon }
            </div>    

            <p>
                { message }
            </p>
        </div>

    )
}
