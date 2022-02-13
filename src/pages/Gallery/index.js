import { SubPage } from '@components/Layout/Layout';
import styles from './Gallery.module.css';
// import { imgs } from './imgs';



const Gallery = () => {
    const {
        galley_container,
        row,
        header_background
    } = styles;
    
    return (
        <>
        <SubPage pageTitle = "معرض الصور" className = { header_background } />

            <div className = { galley_container } >

            <div  className = { row } >
                {imgs(216, Img )}
            </div>

        </div>
        </>
    );
};

export default Gallery;

function imgs(len, Component) {
    let arr = [];
    for(let i = 0; i < len; i++){
        const ref = `/assets/imgs/gallery/${i+1}.png`;
        arr.push(<Component key={i} src = { ref } />)
    }

    return arr;
}

function Img({ src }) {

    const { 
        col,
        card
    } = styles;

    return (
        <div className = { col }>

            <div className = { card }>
                <img src = { src } />
            </div>

        </div>
    )
}