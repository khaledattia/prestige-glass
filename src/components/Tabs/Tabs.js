import { useState, useEffect } from 'react';
import { BsCheckCircle } from 'react-icons/bs';
import styles from './Tabs.module.css';



export const Tabs = () => {


    const [index, setIndex] = useState(0);
    const { 
        tabs, 
        tab, 
        component_wrapper, 
        tab_panel, 
        Active, 
        show, 
        traingle,
        items,
        item,
        icon
    } = styles;

   

    const handelIndex = (i) => {

        setIndex(i)
    }



    useEffect(() => {
        const panels       = document.querySelectorAll(`.${ tab_panel }`);
        const tabs         = document.querySelectorAll(`.${ tab }`);
        const activePanel  = document.querySelector(`.${ show }`);
        const activeBtn    = document.querySelector(`.${ Active }`)

        if( activePanel ) activePanel.classList.remove(`${ show }`);
        if( activePanel ) activeBtn.classList.remove(`${ Active }`);
        

        panels[index].classList.add(`${ show }`);
        tabs[index].classList.add(`${ Active }`);
        

    }, [ index, show ]);

    return (

        <div className= { component_wrapper } >
            <div className = { tabs }>
                <div className = { tab } 
                role = "button" 
                onClick={ () => handelIndex(0) }>
                    مضمون
                    <div className = { traingle } />
                </div>

                <div className = { tab }
                role = "button"
                onClick={ () => handelIndex(1) }>
                    سرعة التركيب
                    <div className = { traingle } />
                </div>

                <div className = { tab }
                role = "button"
                onClick={ () => handelIndex(2) }>
                    جودة عالية
                    <div className = { traingle } />
                </div>
            </div>

            <div className = { tab_panel }>
                <div>نحقق الجودة والأمان والمصداقية عن.</div>

                <ul className = { items }>
                    <li className = { item }>

                        <span>الجودة والتصاميم يتحقق بعمق</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>

                    <li className = { item }>

                        <span>المراجعة الدورية للعمل والجداول الزمنية</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>

                    <li className = { item }>

                        <span>تطوير الاعمال والاستراتيجية</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>
                </ul>
                
            </div>

            <div className = { tab_panel }>
                
                <div>نحن نهتم بارضاء عملائنا بشكل كبير و ذالك نهتم بـ</div>

                <ul className = { items }>
                    <li className = { item }>

                        <span>السرعة فى التسليم</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>

                    <li className = { item }>

                        <span>الالتزام فى الاتفاقيات</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>
                </ul>
            </div>

            <div className = { tab_panel }>
                <div> من اولوياتنا ان نقدم منتج و خدمة جيدة لذالك نتحقق من</div>

                <ul className = { items }>
                    <li className = { item }>

                        <span>جودة الزجاج تكون عالية لكل عملائنا</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>

                    <li className = { item }>

                        <span>خدمة التركيب تكون بشكل احترافى فنحن نهتم بأدق التفاصيل</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>

                    <li className = { item }>

                        <span>الاختبار على جميع اعمالنا لنتاكد انها تقدم فى افضل شكل و اعلى جودة</span>
                        <span className = { icon }>
                            <BsCheckCircle />
                        </span>

                    </li>
                </ul>
            </div>
        </div>
    );
};