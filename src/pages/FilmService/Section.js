import styles from "./FilmService.module.css";
// import decore from "@assets/imgs/decor.jpg";

export default function Section(props) {
  const { filmService, size } = styles;
  const { dir, img, parag, title } = props;
  const direction = dir === "ltr" ? " order-1-rev content-right " : "";
  const justifyConent = dir !== "ltr" ? " order-md-1" : "";
  
  return (
    <div className={filmService}>
      <div className="flex content-lg-center content-md-right wrap">
        <div className={"flex-md-1 flex content-right " + justifyConent}>
          <div className={"text-right px-2 " + size}  >
            <h2 className="family-cairo">{title}</h2>
            <p className="family-cairo">
              {parag}
            </p>
          </div>
        </div>

        <div className={"flex-md-1 px-2 flex content-right   " + direction}>
          <div className={size}>
            <img className="w-100" src={img} alt="showerbox decor" />
          </div>
        </div>
      </div>
    </div>
  );
}
