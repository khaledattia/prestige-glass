
import { useEffect, useRef } from 'react';
import { Carousel } from '@components/Carousel/Carousel';
import { Responsibilities } from './Responsibilities/Responsibilities';
import { WhyUs } from './WhyUs/WhyUs';
import { Duty } from './Duty/Duty';
import { Gallery } from './Gallery/Gallery';
// import styles from './Home.module.css';
import { GiMirrorMirror } from 'react-icons/gi'; 
import { BsStopwatch,
    BsShield,
    BsPatchCheck,
    BsDoorOpen,
    BsBarChartSteps } from 'react-icons/bs'


export const Home = () => {

    // const { home } = styles

    return (

        <div>
            <header>
                <Carousel />
            </header>

            <Responsibilities />
            
            <WhyUs 
            dir = "right"
            h2Text       = { "لماذا نحن؟" } 
            highlightedP = { "نحن لدينا الحل لتشديد الزجاج المشكل" } 
            p            = { 
                <span>
                    من خلال بحث مكثف وسنوات عديدة من الخبرة ، تم اكتشاف الحل لتقوية الزجاج المشكل
                    من أي حجم أو شكل أو سمك تقريبا.
                    <br /><br />
                    يتم توفير زجاج برستيج جلاس كزجاج مقوى وفقا لمعايير التقوية، ويتوفر أيضا كزجاج مصفح ومعاد تلدينه اعتمادا على المواصفات.
                    اعتمادا على المواصفات.
                </span>
            } 
            icon_01      = { <BsStopwatch /> } 
            icon01Head   = { "سرعة" } 
            icon01Text   = { "سرعة التسليم خلال 4ايام عمل فقط" }

            icon_02      = { <BsShield /> } 
            icon02Head   = { "أمان" } 
            icon02Text   = { "محكم الغلق والتركيب يحتفظ بالحرارة ومع ضمان عدم تسريب المياه." } 

            icon_03      = { <BsPatchCheck /> } 
            icon03Head   = { "جودة" } 
            icon03Text   = { "الاكسسوارات لدينا من أجود أنواع الاستانلس ستيل 304 الغير قابل للصدأ" } 

            buttonHref   = {"/about-us" }
            buttonText = { "تعرف  علينا" }
            />

            <Duty />

            <WhyUs 
            h2Text       = { "خدماتنا" } 
            highlightedP = { "اختر الخدمة التى تحتاج لها" } 
            p            = { 
                `
                    سواء كنت تبني ( منزلك - عملك ) الجديد أو تعيد تصميمه، يمكن أن تساعدك
                    برستيج جلاس في إنشاء مرايات جديدة وإحاطة الدش أو حوض الاستحمام بالزجاج كما يمكننا 
                    مساعددتك فى عمل الدرابزين بالـ(الزجاج - الاستانلستيل - زجاج واستانلستيل)
                `
            } 
            icon_01      = { <BsBarChartSteps /> } 
            icon01Head   = { "درابزين" } 
            icon01Text   = { `استانلستيل فقط أو زجاج فقط أو 
                            زجاج واستانلستيل` }

            icon_02      = { <GiMirrorMirror /> } 
            icon02Head   = { "مرايات" } 
            icon02Text   = { "موضيئه وغير موضيئه" } 

            icon_03      = { <BsDoorOpen /> } 
            icon03Head   = { "أبواب" } 
            icon03Text   = { "أبواب بالنظامين المفصلي والجرار." } 

            buttonHref   = {"/services" }
            buttonText = { "المزيد" }
            />

            <Gallery />
            <div id="map">
                <iframe 
                src="https://maps.google.com/maps?q=كافتيريا جوهرة الملكة,giza,egypt&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                style = {{width: "100%", height: "400px", border: "none"}}
                allowFullScreen />

            </div>
            
        </div>
        
    )
}















function MyMapComponent({ center, zoom }) {
    const ref = useRef();
  
    useEffect(() => {

      new window.google.maps.Map(
        ref.current, {
        center,
        zoom,
      });

    });
  
    return <div ref={ref} id="map" />;
  }