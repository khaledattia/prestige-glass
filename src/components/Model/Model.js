import { useEffect } from 'react';
import styles from "./Model.module.css";
import { BsX } from "react-icons/bs";

export const Model = ({ status, src, set, setStatus }) => {

    const { 
        model,
        img_container,
        btn_close
    } = styles;

    useEffect(()=> {
        const _model = document.querySelector(`.${ model }`);

        _model.addEventListener("click", handleClick);
        document.addEventListener("keydown", handleKeydown);

        function handleClick({ target }) {
            const imgContainer = document.querySelector(`.${ img_container }`);

            if(status === "open" && !imgContainer.contains( target )) {
                setStatus("close");
            };
        };

        // function handleBack() {
        //     if( status === "open" ) {
        //         setStatus("close");
        //     }
        // }

        function handleKeydown({ key }) {
            if( status === "open" && key === "Escape" ) {
                setStatus("close");
            };
        };

        

        return () => {
            set("");
            _model.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleKeydown);
        };
    });


    return (
        
      <div className = { model }>
            <div className = { img_container }>
                <img 
                src = { src } 
                style={{ height: "100%" }} 
                alt = "this pic represent our work" />

                <div 
                className = { btn_close } 
                role = "button" 
                onClick = { () => setStatus("close") }>
                    <BsX />
                </div>

            </div>

      </div>
    )
}
