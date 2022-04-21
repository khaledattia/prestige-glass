import styles from './Responsibilities.module.css';

import video_promo from "@assets/videos/promo.mp4";

export const Responsibilities = () => {

    const { responsibilities } = styles;
    return (
        
        
    
        <section className = {` ${ responsibilities } --container`} style = {{ display: 'flex', flexWrap: 'wrap'}}>

            <Responsibility head = { "احترافية" } 
            text = { `
                الاحترافية هى عادة و ليست بجديد
                فهى ما تميزنا و تسعدنا قبل ان
                تسعد عملائنا` 
            } />
            <Responsibility head = { "جودة" } text = { `
                نتأكد من استلامك فى المواعيد المحددة
                و الالتزام بالاحترافية و عكس ما تريده بدقة
            ` } />
            <Responsibility head = { "التصميم" } text = { `
                لا نقدم مجرد عمل ولكن نحن
                ندرس ما نعمل عليه و نصممه
                باحترافية لتقديم ما يسعدك دائما
            ` } />
            <video  title="promo" width="100%" controls style={{ marginTop: "5rem" }}>
                <source src={ video_promo } type="video/mp4"></source>
            </video>
        </section>
    );
};


const Responsibility = ({ head, text }) => {
    const { responsibility, circle, title } = styles;
    return (
        <div className = { `${ responsibility } animate__animated animate__fadeInUp off-set` }>

            <div className = { title } >
                { head }
            </div>

            <div className = { circle } />
            <p>
                { text }
            </p>

        </div>
    );
};