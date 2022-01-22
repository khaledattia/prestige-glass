import styles from './Layout.module.css';


export const SubPage = ({ pageTitle, className }) => {

    const { header, page_title } = styles;

    return (
        
        <header className = { header } >

            <div className = { `${ page_title } ${ className } --container` } >
                <h2>
                    
                    { pageTitle }

                </h2>
                {/* <div className = { services } >

                    <ArabicServices />
                </div>

                <div className = { contacts } >

                    <ArabicContacts />
                </div>

                
                <div className = { about } >

                    <ArabicAbout />
                </div>

                
                <div className = { contacts } >

                    <ArabicGallery />
                </div> */}
            </div>


        </header>

    );
};