import styles from './AsideSocial.module.css';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';

export const AsideSocial = () => {

    const { social_Icon, social_links } = styles;
    return (
        <div className = { social_links }>

                <div className = { social_Icon }>
                    <a href='https://wa.me/+201119133344'>
                        <BsWhatsapp />
                    </a>
                </div>


                <div className = { social_Icon }>
                    <a href='https://www.facebook.com/PrestigeGlassPE'>
                        <BsFacebook />
                    </a>
                </div>


                <div className = { social_Icon }>
                    <a href='https://www.facebook.com/PrestigeGlassPE'>
                        <BsInstagram />
                    </a>
                </div>
        </div>

    );
};