import styles from './NotFoundPage.module.css';
import not_found from '@assets/404.png';


 const NotFoundPage = () => {

    const { 
        text_message,
        img_container,
        wrapper
     } = styles;
    return (


        <div className = {'--container ' + wrapper}>
            <div className = { text_message }>
                <h1>404</h1>
                <p>
                    OOPS!
                </p>
                <p>
                    it looks like you are lost
                </p>
            </div>

            <div className = { img_container }>
                <img src = { not_found } alt = "ballon" />
            </div>
        </div>
    );
};

export default NotFoundPage;