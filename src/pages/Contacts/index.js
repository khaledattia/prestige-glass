


import { SubPage } from '@components/Layout/Layout';
import { BsPinMapFill, BsPhone, BsEnvelope } from 'react-icons/bs';
import styles from './Contacts.module.css';

const Contacts = () => {

    const { header_background } = styles;

    return (

        <>
            <SubPage pageTitle = "اتصل بنا" className = { header_background } />
            <ContactsInfo />
        </>
    );
};

export default Contacts;




export const ContactsInfo = () => {


    const { 
        container, 
        line,
        map_wrapper, 
        contacts,
        contact_wrapper,
        span
    } = styles;

    return (
        <div className = { `${ container } --container` } >
            <div className = { map_wrapper }>
                <iframe 
                src="https://maps.google.com/maps?q=كافتيريا جوهرة الملكة,giza,egypt&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                style = {{width: "100%", height: "100%", border: "none"}}
                allowFullScreen />
            </div>


            <div className = { line } />

            <div className = { contacts }>

                <div className = { contact_wrapper }>
                    <Contact 
                    label = { "العنوان" } 
                    icon  = { <BsPinMapFill /> } />
                    <div className = { span }>محور جمال عبد الناصر - فيصل، الجيزة</div>
                    <div className = { span }>شارع اللبينى فيصل الجيزة</div>
                </div>

                <div className = { contact_wrapper }>
                    <Contact 
                    label = { "البريد الالكترونى" } 
                    icon = { <BsEnvelope /> } />
                    <div className = { span }>
                        <a href="mailto:info@prestigeglass-eg.com">info@prestigeglass-eg.com</a>
                    </div>
                </div>


                <div className = { contact_wrapper }>
                    <Contact 
                    label = { "رقم التليفون" } 
                    icon = { <BsPhone /> } />
                    <div className = { span }>
                        <a href='tel:+201119133344'>+20-111-913-3344</a>
                    </div>
                    <div className = { span }>
                        <a href='tel:+201118399949'>+20-111-839-9949</a>
                    </div>
                </div>

            </div>

        </div>
    );
}


const Contact = ({ contentText, icon, label }) => {

    const { 
        contact, 
        _icon, 
        title,
        contact_text,
        _label
     } = styles;


    return (
        <div className = { contact }>

            <div className = { contact_text }>
                { contentText }
            </div>

            <div className = { _label }>
                <div className = { _icon } >
                    { icon }
                </div>

                <div className = { title }>
                    { label }
                </div>
            </div>
            
        </div>
    );
};