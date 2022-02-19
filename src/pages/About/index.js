import styles from './About.module.css';
import { SubPage } from '@components/Layout/Layout';
import img_001 from '@assets/imgs/about/_001.png';
import { ContactsInfo } from '../Contacts';

const About = () => {


    const { 
        about, 
        context, 
        img_wrapper, 
        header_background
    } = styles;

    return (
        <>
        <SubPage pageTitle = "تعرف علينا" className = { header_background } />
            <div className = { `${ about } --container` } >
                <div className = { context } style={{textAlign: "right"}}>
                    <p>
                        شركة برستيج جلاس هى شركة تقدم خدمات الزجاج, افضل جودة للزجاج بمواصفات عالمية
                        خصيصًا لمواكبة الطلب على الزجاج المزخرف وجميع أنواع الزجاج
                        مع فريق مبيعات متخصص ومحترف للمساعدة في جميع الاستفسارات
                        <br /><br />
                         
                        برستيج جلاس تقدم حلولًا كاملة لجميع مجالات الزجاج المزخرف. بعد اعوام من الخبرة في صناعة الزجاج ، تنتشر
                        شبكة عملائنا على نطاق واسع في جميع أنحاء مصر.
                        <br /><br />

                        برستيج جلاس
                        تمتلك  
                        قاعدة موظفين على درجة عالية من
                        المهارة والخبرة
                        ،وهي قادرة على إنتاج نفس المنتج والخدمة عالية الجودة لاستكمال الشركات المرتبطة بها.


                        <br /><br />
                        
                    <span style={{ textAlign: "right", display: "block" }}>:بعض عملائنا</span>
                        البنك العربى الافريقى -
                        البنك الاهلى المصرى -
                        سيراميكا كليوباترا -
                        جامعة النيل -
                        مركب فرعون -
                        صيدليات -
                    </p>

                </div>

                <div className = { img_wrapper }>
                    <img src = { img_001 } alt =  "company img" />
                </div> 
            </div>

            <ContactsInfo />
        </>
    );
};

export default About;