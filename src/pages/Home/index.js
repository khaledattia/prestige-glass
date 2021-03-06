
import { Carousel } from '@components/Carousel/Carousel';
import { Responsibilities } from './Responsibilities/Responsibilities';
import { WhyUs } from './WhyUs/WhyUs';
import { Duty } from './Duty/Duty';
import { Gallery } from './Gallery/Gallery';
import styles from './Home.module.css';
import { GiMirrorMirror } from 'react-icons/gi'; 
import { BsStopwatch,
    BsShield,
    BsPatchCheck,
    BsShop,
    BsBarChartSteps } from 'react-icons/bs'


export const Home = () => {

    const { quality } = styles


    return (

        <div>
            <header>
                <Carousel />
            </header>

            <Responsibilities />
            <WhyUs 
            dir = "right"
            h2Text       = { "لماذا نحن؟" } 
            highlightedP = { "نحن لدينا الحل لتقوية الزجاج السكوريت" } 
            p            = { 
                <span>
                    من خلال بحث مكثف وسنوات عديدة من الخبرة ، تم اكتشاف الحل لتقوية الزجاج السكوريت
                    من أي حجم أو شكل أو سمك تقريبا.
                    <br /><br />
                    يتم توفير زجاج برستيج جلاس بي اى كزجاج مقوى وفقا لمعايير التقوية، ويتوفر أيضا كزجاج مصفح ومعاد تلدينه اعتمادا على المواصفات
                </span>
            } 
            icon_01      = { <BsStopwatch /> } 
            icon01Head   = { "سرعة" } 
            icon01Text   = { "تلتزم برستيج جلاس بي اى بسرعة التسليم حيث انها احدى مميزاتنا" }

            icon_02      = { <BsShield /> } 
            icon02Head   = { "أمان" } 
            icon02Text   = { "نحن ملتزمون باعطاء الضمانات اللازمه على اعمال التركيب و التوريد" } 
            
            icon_03      = { <BsPatchCheck /> } 
            icon03Head   = { "جودة" } 
            icon03Text   = { `الزجاج السكوريت صناعه مصريه بمواصفات أوروبية 
            الاكسسوارات ايطالي - صيني - تركي 
            بمواصفات أوروبية` } 

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
                    برستيج جلاس بي اي في عمل الهاندريل - الوجهات - الباب - الشاور بوكس - المرايات
                `
            } 
            icon_01      = { <BsBarChartSteps /> } 
            icon01Head   = { "هاندريل" } 
            icon01Text   = { `زجاج فقط او زجاج و استانلس ستيل او زجاج و خشب` }

            icon_02      = { <GiMirrorMirror /> } 
            icon02Head   = { "مرايات" } 
            icon02Text   = { "عادى - تاتش ليد - عادى ليد" } 

            icon_03      = { <BsShop /> } 
            icon03Head   = { "واجهات" } 
            icon03Text   = { "محلات - شركات - مكاتب - عيادات - صيدليات - مستشفيات" } 

            buttonHref   = {"/services" }
            buttonText = { "المزيد" }
            />

            <Gallery />

            <div id="map" className = 'animate__animated animate__fadeInUp off-set'>

                <iframe 
                title={`our location`}
                src="https://maps.google.com/maps?q=كافتيريا جوهرة الملكة,giza,egypt&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
                style = {{width: "100%", height: "400px", border: "none"}}
                allowFullScreen />
            </div>
            
        </div>
        
    )
}