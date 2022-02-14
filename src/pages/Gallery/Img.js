 
import styles from './Gallery.module.css';


export const Img = ({ link, set, setStatus }) => {

    const { 
        col,
        card
    } = styles;

    return (
        <div className = { col }>

            <div className = { card } onClick = { ()  => {
                set( link );
                setStatus("open")
            }}>
                <img src = { link } alt = "our art work" />
            </div>

        </div>
    )


}
