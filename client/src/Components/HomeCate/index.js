import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from'react';

const HomeCate = () => {


    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
    ]);

    return (
        <section className="homeCate">
            <div className="container">
            <h3 class=' mb-3 hd'>Featured Categories</h3>
                <Swiper
                    slidesPerView={10}
                    slidesPerGroup={3}
                    spaceBetween={8}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {
                        itemBg?.map((item, index) => {
                            return(
                                <SwiperSlide>
                                    <div className="item text-center cursor" style={{background:item}}>
                                        <img src="https://storage.googleapis.com/lwimg/mh/hp/adventure-300.png"></img>
                                        <h6>Adventure</h6>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
 
                </Swiper>
            </div>
        </section>
    )
}

export default HomeCate;