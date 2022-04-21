import Relative from "./Relative";
import Section from "./Section";
import sec1 from "@assets/imgs/films/sec1.jpg";
import sec2 from "@assets/imgs/films/sec2.png";
import sec3 from "@assets/imgs/films/sec3.png";

// ---------------
import film1 from "@assets/imgs/films/A1.png";
import film2 from "@assets/imgs/films/A2.png";
import film3 from "@assets/imgs/films/A3.png";
import film4 from "@assets/imgs/films/A4.png";

// ---------------
import safty100 from "@assets/imgs/films/safty100.png";
import safty200 from "@assets/imgs/films/safty200.png";

// ---------------
import pe1 from "@assets/imgs/films/pe1.jpg";
import pe2 from "@assets/imgs/films/pe2.jpg";
import pe3 from "@assets/imgs/films/pe3.jpg";
import pe4 from "@assets/imgs/films/pe4.jpg";

export default function FilmService() {
  return (
    <> 
      <h2 dir="rtl" className="family-cairo text-center py-4 flex wrap">  افلام الديكور, الحرارة والحماية بالتعاون مع شركة wellcool</h2>
      <Section
        img={sec1}
        parag={<DecorParag />}
        title="افلام الديكور و الطباعة"
      />
      <Section
        img={sec2}
        parag={<TempParag />}
        title="افلام الحراره"
        dir="ltr"
      />
      <Relative
        title="Product Specification"
        background="rgba(0, 0, 0, 0.16)"
        imgs={[film1, film2, film3, film4]}
      />
      <Section img={sec3} parag={<SecureParag />} title="افلام الحمايــه" />
      <Relative
        title="(SF-100) - (SF-200)"
        background="rgba(0, 0, 0, 0.16)"
        imgs={[safty100, safty200]}
      />
      <Relative
        titleColor="white"
        title="Prestige Glass System (PE)"
        background="#232323"
        imgs={[pe1, pe2, pe3, pe4]}
      />
    </>
  );
}

function DecorParag() {
  return (
    <>
      أفلام تظليل النوافذ وفقًا للون والأنماط والتصميمات الخاصة بك
      <br />
      <br />
      وتنقسم الى
      <br />
      <span>افلام الديكور مسنفر او طباعة -</span>
      <br />
      <span>افلام سى سرو -</span>
    </>
  );
}

function TempParag() {
  return (
    <>
      يتم تركيب فيلم حمايه حراري ليمنع حرارة الشمس بنسبة تصل إلى %75 بالتالي
      يوفر فى الكهرباء و يزيد في العمر الافتراضي للتكييف, والأهم هو احساس
      التكييف الرائع كما انه يمنع الأشعة فوق البنفسجية بنسبة تصل %99
      <br />
      <br />
      وتنقسم الى
      <br />
      <span>افلام حرارة شفافة تعزل الحرارة -</span>
      <br />
      <span>افلام حرارة عاكسة للرؤية -</span>
    </>
  );
}

function SecureParag() {
  return (
    <>
      بيتم تركيب فيلم حمايه شفاف على الزجاج الخام أو السومرية لمنع تناثر شظايا الزجاج عند حدوث كسر أو اقتحام

      بسمكات مختلفه على حسب نسبة الحماية المطلوبة
      <br />
      <br />
      وتنقسم الى
      <br />
      <span>كورى (sF-200) و (SF-100) -</span>
      <br />
      <span> امريكى (Prestige Glass PE) -</span>
    </>
  );
}
