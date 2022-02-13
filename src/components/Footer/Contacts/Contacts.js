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
                text = { <span style={{display: "flex"}}>محور جمال عبد الناصر - فيصل، الجيزة <span style={{marginLeft: "0.25rem"}}>34</span></span>}
                href = { "https://www.google.com/maps?ll=30.018997,31.192131&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=5753353574757392182" }
            />

            <Contact
                text = { <span>شارع اللبينى فيصل الجيزة</span>}
                href = { "https://www.google.com/maps/place/30%C2%B000'18.4%22N+31%C2%B008'12.5%22E/@30.005106,31.1346292,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6019032ef20967aa!8m2!3d30.005106!4d31.1368179?hl=en" }
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