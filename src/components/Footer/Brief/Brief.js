
import logo from '@assets/logo.png';
import { BsWhatsapp, BsFacebook } from 'react-icons/bs';
import styles from '../Footer.module.css';


export const Brief = () => {

    const { brief, __logo, social , intro } = styles;


    return (
        <div className = { brief }>
            <div className = { intro }>
                <p>
                    شركة برستيج جلاس اختيارك
                    للزجاج الافضل. معك لتعكس ذوقك
                    فى المطاعمل، الفنادق، المكاتب
                    و المنازل
                </p>

                <div className = { __logo }>
                    <img src = { logo } />
                </div>
            </div>

            <div className = { social }>
                <a href='/#'>
                
                    <BsWhatsapp />
                </a>

                <a href='/#'>
                    <BsFacebook />
                </a>
            </div>
        </div>
    );
};