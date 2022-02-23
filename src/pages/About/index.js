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
                        لمواكبة الطلب على الزجاج السكوريت وجميع أنواع الزجاج
                        مع فريق مبيعات متخصص ومحترف للمساعدة في جميع الاستفسارات
                        <br /><br />
                         
                        برستيج جلاس تقدم حلولًا كاملة لجميع مجالات الزجاج السكوريت المسنفر و الشفاف. بعد اعوام من الخبرة في توريد و تركيب الزجاج ، تنتشر
                        شبكة عملائنا على نطاق واسع في جميع أنحاء القاهرة و الجيزة.
                        <br /><br />

                        برستيج جلاس
                        تمتلك  
                        قاعدة موظفين على درجة عالية من
                        المهارة والخبرة
                        ،وهي قادرة على تركيب و توريد نفس المنتج والخدمة عالية الجودة لاستكمال الشركات المرتبطة بها.


                        <br /><br />
                        
                    <span style={{ textAlign: "right", display: "block" }}>:بعض عملائنا</span>
                        البنك العربى الافريقى -
                        البنك الاهلى المصرى -
                        سيراميكا كليوباترا -
                        جامعة النيل -
                        مركب فرعون -
                        صيدليات -
                        مكاتب -
                        عيادات -
                        مستشفيات - 
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