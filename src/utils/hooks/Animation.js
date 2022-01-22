

import { useEffect } from 'react';
import { useLocation } from "react-router-dom";



export const Animation = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const animated = document.querySelectorAll(".off-set");
        const windowHeight = window.innerHeight;
        const toTopButton = document.querySelector(".to-top-button");
        


        
        animated.forEach(el => {
            let y = el.getBoundingClientRect().y

            if(y > 0 && y < (windowHeight) ) {
                el.classList.remove("display--none");
            }else {
                el.classList.add("display--none");
            }
        })
        

        window.addEventListener('scroll', function() {
            animated.forEach(el => {
                let num = el.getBoundingClientRect().y

                if(num > 0 && num < (windowHeight - 100) ) {
                    el.classList.remove("display--none");
                }
            })

            if(window.scrollY >= windowHeight - 300) {
                toTopButton.style.display = "flex";
            }else {
                toTopButton.style.display = "none";
            }
        });


    }, [pathname]);

    return null
};