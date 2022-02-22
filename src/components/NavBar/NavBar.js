import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import  {
    BsFillPhoneFill, 
    BsCreditCard2Back 
} from "react-icons/bs";
import { Form } from '../Form/Form';

export const NavBar = () => {

    const [FormData, setFormData] = useState({
        first_name:"",
        last_name: "",
        email: "",
        phone_number: "",
        amount: ""
    });
    // classes
    const {
        navigation,
        logo_container, 
        link,
        burger_menu,
        burger,
        contact,
        wrapper,
        contacts,
        icon,
        active,
        links,
        show_menu,
        animate, 
        hyphen,
        main_nav,
        payment_link,
        tap
    } = styles;
    const { pathname } = useLocation();
    const [activeForm, setActiveForm] = useState(false);
    const [show, setshow] = useState(false);
    const [activePage, setActivePage] = useState();

    useEffect(() => {
        const menu = document.querySelector(`#menu`)
        
        const handleEscape = ({ key }) => {
            if( key === "Escape" && show) {
                setshow( false );
            }
        };

        document.addEventListener("keydown", handleEscape);
        window.addEventListener("resize", () => setshow(false));

    }, [show])

    useEffect(() => {
        setActivePage(pathname);

    }, [ pathname ])


    
    return (
        <>
            { activeForm ? <Form setActiveForm = { setActiveForm } state = { FormData } setState = { setFormData } /> : <></> }
            <nav className = {`${ navigation } `} >

                <div className = {`${ tap } --container`}  >
                    <div className = { `${ contacts } `}>
                        <div className = { contact } >
                            <a href='tel:+201118399949'>+20-111-839-9949</a>
                        </div>

                        <span className = { hyphen }>-</span>

                        <div className = { contact } >
                            <a href='tel:+201119133344'>+20-111-913-3344</a>
                        </div>

                        
                        <span className = { icon }>
                            <BsFillPhoneFill />
                        </span>
                    </div>

                    <Link 
                    to = "payment-methods" 
                    className = { payment_link } 
                    role = "button">
                        <p>طرق الدفع</p>

                        <div style={{ display: "flex", marginLeft: "0.5rem" }}>
                            <BsCreditCard2Back />
                        </div>
                    </Link>
                </div>

                <div className = { `${ main_nav } --container` }>
                    <Link className = { logo_container } to = "/" >
                    </Link>

                    <div 
                    className = { `${ burger_menu } ${ show ? show_menu : null }` }
                    onClick = { () => setshow( prev => !prev ) } >
                        <i className = { burger }/>
                        <i className = { burger }/>
                        <i className = { burger }/>
                    </div>

                    <div id = "menu"  className = { wrapper } >
                        
                        <ul className = { `${ links } ${ show ? animate : '' }` }>
                            <li className = {`${ link } 
                            ${ activePage === '/' ? active : '' }`} 
                            onClick = { () => setshow( prev => !prev )} > 
                                <Link to = "/"> الرئيسية </Link> 
                            </li>

                            <li className = {`${ link } 
                            ${ activePage === '/about-us' ? active : '' }`} 
                            onClick = { () => setshow( prev => !prev )} > 
                                <Link to = "/about-us"> تعرف علينا </Link> 
                            </li>

                            <li className = {`${ link } 
                            ${ activePage === '/gallery' ? active : '' }`} 
                            onClick = { () => setshow( prev => !prev )} > 
                                <Link to = "/gallery"> معرض الصور </Link> 
                            </li>

                            <li className = {`${ link } 
                            ${ activePage === '/services' ? active : '' }`} 
                            onClick = { () => setshow( prev => !prev )} > 
                                <Link to = "/services"> خدماتنا </Link> 
                            </li>

                            <li className = {`${ link } 
                            ${ activePage === '/contact-us' ? active : '' }`} 
                            onClick = { () => setshow( prev => !prev )} > 
                                <Link to = "/contact-us"> اتصل بنا </Link> 
                            </li>
                        </ul>
                    </div>
                </div>


            </nav>
        </>
    )
}