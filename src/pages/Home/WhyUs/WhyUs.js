

import { Link } from 'react-router-dom';
import { Button } from '@components/Button/Button';
import styles from './WhyUs.module.css';

export const WhyUs = ({ 
    dir, 
    h2Text, 
    highlightedP, 
    p, 
    icon_01, 
    icon01Head, 
    icon01Text,
    icon_02, 
    icon02Head, 
    icon02Text, 
    icon_03, 
    icon03Head, 
    icon03Text, 
    buttonHref,
    buttonText
}) => {


    const { 
        why_choose_us, 
        card, 
        cairo, 
        cards, 
        wrapper, 
        right, 
        left, 
        brief,
        icon
    } = styles;

    return (
        
      <section className = {`${ why_choose_us } ${ dir === 'right' ? right : left } --container`}  >
           <div className = { brief }>
                <h2 className = { cairo }>
                    { h2Text }
                </h2>

                <p className = { cairo }>
                    { highlightedP }
                </p>

                <p>
                    { p }
                </p>
           </div>

            <div className = { wrapper }>
                <div className = { cards }>

                    <div className = { card }>
                        <span className = { icon }>
                            { icon_01 }    
                        </span>

                        <p>
                            { icon01Head }
                        </p>

                        <p>
                            { icon01Text }
                        </p>
                    </div>

                    <div className = { `${ card } decorate_relative top_decoration` }  >
                        <span className = {`bottom_decoration ${ icon }`}>
                            { icon_02 }    
                        </span>

                        <p>
                            { icon02Head }
                        </p>

                        <p>
                            { icon02Text }
                        </p>
                    </div>

                    <div className = { card }  >
                        <span className = { icon }>
                            { icon_03 }    
                        </span>

                        <p>
                            { icon03Head }
                        </p>

                        <p>
                            { icon03Text }
                        </p>
                    </div>
                </div>
            

                <Link to = { buttonHref }>
                    <Button 
                        color = { "#fff" }
                        borderColor = {"#fff"}
                        text = { buttonText }
                    />
                </Link>

                {/* <a href='tel:' className=' --button decorate_relative top_decoration' style = {{ border: "1px solid" }}>
                    <span className='bottom_decoration' style={{ color: "black" }}>
                        تعرف  علينا
                    </span>
                </a> */}

            </div>
        </section>
    );
};