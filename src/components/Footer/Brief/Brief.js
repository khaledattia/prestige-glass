
import logo from '@assets/whitelogo.png';
import { BsWhatsapp, BsFacebook, BsInstagram } from 'react-icons/bs';
import styles from '../Footer.module.css';


export const Brief = () => {

    const { brief, __logo, social , intro } = styles;


    return (
        <div className = { brief }>
            <div className = { intro }>
                <p style={{order: "1"}}>
                    شركة برستيج جلاس اختيارك
                    للزجاج الافضل. معك لتعكس ذوقك
                </p>

                <div className = { __logo }>
                    <img src = { logo } />
                </div>
            </div>

            <div className = { social }>
                <a href='https://wa.me/+201119133344'>
                
                    <BsWhatsapp />
                </a>

                <a href='https://www.facebook.com/PrestigeGlassPE'>
                    <BsFacebook />
                </a>

                

                <a href='https://instagram.com/prestige_glass.pe?r=nametag'>
                    <BsInstagram />
                </a>
            </div>
        </div>
    );
};