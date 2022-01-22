import { Button } from '@components/Button/Button';
import { BsChevronUp } from 'react-icons/bs';
import styles from './ScrollToTop.module.css';

export const ScrollToTop = () => {

    const { button } = styles;
    
    return (

        <div 
        className = { `${ button } to-top-button animate__animated animate__fadeIn` } 
        onClick={() => window.scrollTo(0, 0)}>
          <Button 
          color = {"#fff"}
          backgroundColor = "#CBA135"
          text = {<BsChevronUp style = {{fontSize:  "24px"}} />}
          borderColor = {"#CBA135"}
          />
        </div>
    );
};