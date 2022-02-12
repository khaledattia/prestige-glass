import styles from '../Footer.module.css';
import { BsPhone, BsEnvelope, BsFillPinMapFill } from 'react-icons/bs';

// return contacts 
export const Contacts = () => {

    const { contacts, addressII, link } = styles;


    return (
        <div className = { contacts }>
            <h5>اتصل بنا</h5>

            <Contact
            name = { 'البريد الالكترونى' }
            icon = { <BsEnvelope /> }
            text = { 'info@prestigeglass-eg.com' }
            href = { "mailto: info@prestigeglass-eg.com" }
            />

            <Contact
                name = { 'موبيل' }
                icon = { <BsPhone /> }
                text = { '+20-111-913-3344' }
                href = { 'tel:+201119133344' }
            />

            <Contact
                text = { "+20-111-839-9949"}
                href = { "tel:+201118399949" }
            />

            <Contact
                name = { 'العنوان' }
                icon = { <BsFillPinMapFill /> }
                text = { <span>محور جمال عبد الناصر - فيصل، الجيزة <span>8</span></span>}
                href = { "/#" }
            />

            <Contact
                text = { <span>شارع اللبينى فيصل الجيزة</span>}
                href = { "/#" }
            />
        </div>
    );
};


// return contact
const Contact = ( props ) => {
    const { name, icon, href, text } = props;
    const { link_wrapper, contact_name, link, ic } = styles;
    
    
    return (

        <div className = { link_wrapper }>

            {
                (name && icon) && <div className = { contact_name }>

                    <span> { name } </span>
                        <span className = { ic }>
                        { icon }
                    </span>

                </div>
            }
            <a href = { href } className = { link }> { text } </a>
        </div>
    );
};