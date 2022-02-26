import { useEffect, useState } from "react";

import { Button } from '@components/Button/Button';
import img_0 from '@assets/imgs/carousel/001.jpg';
import img_1 from '@assets/imgs/carousel/002.jpg';
import img_2 from '@assets/imgs/carousel/003.jpg';

import styles from './Carousel.module.css';
import { BsWhatsapp, BsMessenger } from 'react-icons/bs';



export const Carousel = () => {
    const [current, setCurrent] = useState(0);
    const [animateDuration] = useState(15000);
    const {
        carousel,
        carousel_item,
        active,
        img_container,
        carousel_items,
        text,
        animate_MoveUp,
        // animate_fad_in,
        btn_container,
        img,
        main_img
    } = styles;

    // on carousel init
    useEffect(() => {
        const listItems = document.querySelectorAll(`.${ carousel } .${ carousel_item }`);
        const length = listItems.length;

        listItems.forEach( item => {

            item.style.animationDuration = `${ animateDuration }ms`;

        })

        // handle next slide
        const handlenextActiveSlide = ( length ) => {
            setCurrent( prev => {
                let curr = prev + 1;

                if( curr < length) {
                    return curr
                }

                return 0;
            })
        }
        
        const counter = setInterval( () => handlenextActiveSlide( length ), animateDuration );
        
        return () => {
            clearInterval(counter);
        }
     
    }, [ carousel, carousel_item, animateDuration ])

    //  handle carousel changes
    useEffect(() => {
        const listItems = document.querySelectorAll(`.${ carousel } .${ carousel_item }`);

        
        // remove pervious active item;
        listItems.forEach(el => {
            if(el.classList.contains(`${active}`)) el.classList.remove(`${ active }`);
        });

        listItems[current].classList.add(`${ active }`);

    }, [ current, active, carousel_item, carousel ]);







    return (
        <div className = { carousel } >
            <ul className = { carousel_items }>

                <li className = { `${ carousel_item }` }> 

                    <img className = { main_img } src = { img_0 } alt="slide" />
                    

                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_0 } alt = "image part 1" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_0 } alt = "image part 2" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_0 } alt = "image part 3" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_0 } alt = "image part 4" />
                        </div>
                    </div>

                    <div className = { text }>
                        <h1>
                            <span className={ animate_MoveUp }>
                                جودة و امان قبل اى شئ
                            </span>
                        </h1>

                        <p>
                            <span className={ animate_MoveUp }>
                                نحن نتأكد من الجودة و نعطيك ضمان على كافة الاعمال
                            </span>
                        </p>

                        <div className={ btn_container }>
                        
                            <a href = "tel:+201119133344" >
                                <Button 
                                    text = { "اتصل الان" }
                                    borderColor = "#fff"
                                    color = "#fff"
                                />
                            </a>

                        </div>
                    </div>

                </li>

                <li className = { `${ carousel_item }` }>

                    <img src = { img_1 } alt="slide"/>
                    

                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_1 } alt = "image part 1" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_1 } alt = "image part 2" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_1 } alt = "image part 3" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_1 } alt = "image part 4" />
                        </div>
                    </div>


                    <div className = { text }>
                        <h1>
                            <span className={ animate_MoveUp }>
                                ضع لمستك الفنية الان الى منزلك او مكان عملك
                            </span>
                        </h1>

                        <p>
                            <span className={ animate_MoveUp }>
                                نساعدك على اختيار افضل انواع الزجاج و تحويل تصميمك من فكرة الى واقع
                            </span>
                        </p>

                        <div className={ btn_container }>
                            <a href = "https://wa.me/+201119133344">
                        
                                <Button 
                                    
                                    text = { <span style={{display: "flex", alignItems: "center"}}>
                                        ارسل لنا 
                                        &nbsp;
                                        <BsWhatsapp />
                                    </span> }
                                    borderColor = "#fff"
                                    color = "#fff"
                                />
                            </a> 
                        </div>
                    </div>

                </li>

                <li className = { `${ carousel_item }` }>

                    <img src = { img_2 } alt="slide"/>
                    

                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_2 } alt = "image part 1" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_2 } alt = "image part 2" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_2 } alt = "image part 3" />
                        </div>
                    </div>
                    <div className = { img_container } >
                        <div className= { img }>

                            <img src = { img_2 } alt = "image part 4" />
                        </div>
                    </div>


                    <div className = { text }>
                        <h1>
                            <span className={ animate_MoveUp }>
                                لا يوجد لديك افكار لا مشكلة
                            </span>
                        </h1>

                        <p>
                            <span className={ animate_MoveUp }>
                            برستيج جلاس بي اي تدعمك بافكار حتى تصل الى ما يعكس ذوقك و اختيارتك المميزة 
                            </span>
                        </p>

                        <div className={ btn_container }>
                        <a href = "https://m.me/106129871837594" >
                        
                            <Button 
                                text = {  <span style={{display: "flex", alignItems: "center"}}>
                                                ارسل لنا 
                                                &nbsp;
                                                <BsMessenger />
                                            </span> }
                                borderColor = "#fff"
                                color = "#fff"
                            />
                        </a>
                        </div>
                    </div>

                </li>



            </ul>

        </div>
    );
};