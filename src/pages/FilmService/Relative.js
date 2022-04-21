import { useState } from "react";
import { Model } from "@components/Model/Model";
import styles from "./FilmService.module.css";

export default function Relative(props) {
  const { background, imgs, title, titleColor } = props;
  const [status, setStatus] = useState("close");
  const [src, setSrc] = useState("");

  const { relative, rel_img, bg } = styles;
  return (
    <>
      {status === "open" ? (
        <Model set={setSrc} status={status} setStatus={setStatus} src={src} />
      ) : (
        <></>
      )}
      <div className={bg} style={{ background }}>
        <h2 style={{color: titleColor}} className="mb-5 mt-2 family-cairo">{title}</h2>
        <div className={relative + " flex wrap "}>
          {imgs.map((img) => (
            <div className={rel_img}>
              <img
                src={img}
                alt="specofocation"
                onClick={() => {
                  setStatus("open");
                  setSrc(img);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
