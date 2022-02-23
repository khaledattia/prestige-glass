import styles from './Responsibilities.module.css';



export const Responsibilities = () => {

    const { responsibilities } = styles;
    return (
        
        
    
        <section className = {` ${ responsibilities } --container`} style = {{ display: 'flex', flexWrap: 'wrap'}}>

            <Responsibility head = { "احترافية" } 
            text = { `
                الاحترافية هى عادة و ليست بجديد
                فهى ما تميزنا و تسعدنا قبل ان
                تسعد عملائن` 
            } />
            <Responsibility head = { "جودة" } text = { `
                نتأكد من استلامك فى المواعيد المحددة
                و الاتزام بالاحترافية و عكس ما تريده بدقة
            ` } />
            <Responsibility head = { "التصميم" } text = { `
                لا نقدم مجرد عمل ولكن نحن
                ندرس ما نعمل عليه و نصممه
                باحترافية لتقديم ما يسعدك دائما
            ` } />

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