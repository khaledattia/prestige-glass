import styles from './Duty.module.css';
import { Tabs } from '@components/Tabs/Tabs';
import mirror from '@assets/imgs/why_sec_001.jpg';



export const Duty = () => {
  
  
    const { left_content, cairo, duty_container, right_content } = styles;
    return (


        <section className = { `${ duty_container } --container` } >



            <div className = { left_content }>
                <h3 className={ cairo }>
                    نصنع الفن للمكان باحدث التصاميم 
                    التى تعكس كل ما يناسبك
                </h3>
        
                <p>
                    نحن ملتزمون بالحرافية التى لا تشوبها شائبة و الرفاية التى تنعكس فى كل ما نقوم به.
                    نقدم الزجاج المضمون والعديد من الملحقات
                </p>

                <Tabs />
            </div>

            <div className = { right_content } >
                <img src = { mirror } alt = "mirror" />
            </div>
        </section>

    );
};
