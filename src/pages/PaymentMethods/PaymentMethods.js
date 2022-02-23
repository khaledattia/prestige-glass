
import { useRef } from 'react';
import { InstallmentTable } from './InstallmentTable'; 
import Slider from "react-slick";
import { settings } from './sliderSettings';
import styles from './PaymentMethods.module.css';
import { Rerousel } from 'rerousel';
import img_1 from '../../assets/imgs/payment/banks/001.png';
import img_2 from '../../assets/imgs/payment/banks/002.gif';
import img_3 from '../../assets/imgs/payment/banks/003.png';
import img_4 from '../../assets/imgs/payment/banks/004.png';
import img_5 from '../../assets/imgs/payment/banks/005.jpg';
import img_6 from '../../assets/imgs/payment/banks/006.png';
import img_7 from '../../assets/imgs/payment/banks/007.svg';
import img_8 from '../../assets/imgs/payment/banks/008.png';
import img_9 from '../../assets/imgs/payment/banks/009.svg';
import paymob from '../../assets/imgs/payment/paymobLogo.png';
import pos from '../../assets/imgs/payment/pos.png';


const PaymentMethods = function () {
    const sliderRef = useRef(null);

    const { 
        img_container, 
        online_pay, 
        pos_pay, 
        img_wrapper, 
        slider_wrapper,
        card,
        container,
        slide
    } = styles;
    return (


        <div className = {`--container ${ container }`}>
            <div className = { online_pay }>
                <div className = { img_wrapper }>
                    <img src = { paymob } alt = "paymob logo"/>
                </div>

                <div className = { card }>
                    <h2>ادفع عن بعد</h2>
                    <p>
                        تقدر تدفع معانا وانت قاعد فى البيت
                        و دة بيكون من خلال لينك بنبعتهولك و بتدفع منه 
                    </p>
                </div>
            </div>

            <div className = { pos_pay }>
                <div className = { img_wrapper }>
                    <img src = { pos } alt = "pos" />
                </div>

                <div className = { card }>
                    <h2>POS الدفع عن طريق الـ</h2>
                    <p></p>
                    <p>
                        تقدر تدفع من خلال احد فرعنا او من خلال مندوب يوصلك اى مكان داخل القاهرة و الجيزة
                    </p>
                </div>

            </div>
                

            <InstallmentTable />
            <div className = { slider_wrapper }>

            {/* <Rerousel itemRef = { sliderRef } interval = { 3000 }>
                <div className = { slide } ref = { sliderRef }>
                    <div className = { img_container }>
                        <img src = { img_1 } alt = "audi" />
                    </div>
                </div>

                <div className = { slide } ref = { sliderRef }>
                    <div className = { img_container }>
                        <img src = { img_2 } alt = "audi" />
                    </div>
                </div>

                <div className = { slide } ref = { sliderRef }>
                    <div className = { img_container }>
                        <img src = { img_3 } alt = "audi" />
                    </div>
                </div>

                <div className = { slide } ref = { sliderRef }>
                    <div className = { img_container }>
                        <img src = { img_4 } alt = "audi" />
                    </div>
                </div>

                <div className = { slide } ref = { sliderRef }>
                    <div className = { img_container }>
                        <img src = { img_5 } alt = "audi" />
                    </div>
                </div>

            </Rerousel> */}
                <Slider {...settings} >
                    <div>
                        <div className = { img_container }>
                            <img src = { img_1 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_2 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_3 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_4 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_5 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_6 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_7 } alt = "audi" />
                        </div>
                    </div>
                    <div>
                        <div className = { img_container }>
                            <img src = { img_9 } alt = "audi" />
                        </div>
                    </div>
                </Slider>
            </div>     
        </div>
    );
}

export default PaymentMethods;