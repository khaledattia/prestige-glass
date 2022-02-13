


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
                    <div className = { span }>
                        <a style={{display: "flex"}} href='https://www.google.com/maps?ll=30.018997,31.192131&z=13&t=m&hl=en-US&gl=US&mapclient=embed&cid=5753353574757392182'>
                            محور جمال عبد الناصر - فيصل، الجيزة <span style={{marginLeft: "0.25rem"}}>34</span>
                        </a>
                    </div>
                    <div className = { span }>
                        <a href={`https://www.google.com/maps/place/30%C2%B000'18.4%22N+31%C2%B008'12.5%22E/@30.005106,31.1346292,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x6019032ef20967aa!8m2!3d30.005106!4d31.1368179?hl=en`}>
                            شارع اللبينى فيصل الجيزة
                        </a>
                    </div>
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