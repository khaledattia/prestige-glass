
import { Link } from 'react-router-dom';
import styles from '../Footer.module.css';
import { BsArrowLeftShort } from 'react-icons/bs';


export const Links = () => {
    
    const { links } = styles;


    return (
        <div className = { links }>
            <h5>روابط سريعه</h5>

            <Anchoer href = { "/about-us" } text = { "تعرف علينا" } />
            <Anchoer href = { "/gallery" } text = { "مشاريعنا" } />
            <Anchoer href = { "/services" } text = { "خدماتنا" } />
            <Anchoer href = { "/contact-us" } text = { "اتصـــل بنا" } />
        </div>
    );
};


const Anchoer = ({ href, text}) => {

    const { link, ic } = styles;
  
  
    return(

        <Link to = { href } className= { link }>
            <span >
              { text }
            </span>

            <span className = { ic }>
                <BsArrowLeftShort />
            </span>
        </Link>
    );
};