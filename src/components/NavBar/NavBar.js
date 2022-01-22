import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './NavBar.module.css';
import  { BsFillPhoneFill, BsPinMapFill } from "react-icons/bs";








export const NavBar = () => {

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
        animate
    } = styles;
    const { pathname } = useLocation();
    
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
        <nav className = { `${navigation} --container` } >
            
            <Link className = { `${logo_container}` } to = "/" >
            </Link>

            <div 
            className = { `${ burger_menu } ${ show ? show_menu : null }` }
            onClick = { () => setshow( prev => !prev ) } >
                <i className = { burger }/>
                <i className = { burger }/>
                <i className = { burger }/>
            </div>

            <div id = "menu"  className = { wrapper } >
                <div className = { contacts }>
                    
                    <div className = { contact } >
                        <p>محور جمال عبد الناصر - فيصل، الجيزة </p><p>&nbsp;8</p>
                        <span className = { icon }>
                            <BsPinMapFill />
                        </span>
                    </div>
                    
                    <div className = { contact } >
                        <p>
                            <a href='tel:+201119133344'>+20-111-913-3344</a>
                        </p>
                        <span className = { icon }>
                            <BsFillPhoneFill />
                        </span>
                    </div>

                </div>
                
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


        </nav>
    )
}