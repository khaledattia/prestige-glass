import { Contacts } from './Contacts/Contacts';
import { Links } from './Links/Links';
import { Brief } from './Brief/Brief';
import styles from './Footer.module.css';

export const Footer = () => {
    
    const { footer, v_line } = styles;

    return (
        <footer className = { `${ footer } --container` }>
            <Contacts />
            <div className = { v_line } />
            <Links />
            <Brief />
        </footer>
    );
};