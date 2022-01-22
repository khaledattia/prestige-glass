import { Cards } from './Cards';
import styles from './Services.module.css';
import { SubPage } from '@components/Layout/Layout';

// import { 
//     ArabicServices, 
//     ArabicContacts,
//     ArabicAbout, 
//     ArabicGallery 
// } from '@assets/svg/ArabicFonts.js';

const Services = () => {

    const { cards_container, header_background } = styles;



    return (

        <>
        <SubPage pageTitle = "خدماتنا" className = { header_background } />

        <div className = { cards_container} >

            <Cards />
        </div>
        </>

    );
};

export default Services;