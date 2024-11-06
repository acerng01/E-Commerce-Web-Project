import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import {useContext, useRef, useState} from 'react'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';

const ProductZoom = () => {
    const [slideIndex, setslideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const goto = (index) => {
        setslideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

    return (
        <div className="productZoom">
            <div className='productZoom position-relative'>
                <div className='badge badge-primary'>28%</div>
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    spaceBetween={0}
                    navigation={false}
                    modules={[Navigation]}
                    className="zoomSliderBig"
                    ref={zoomSliderBig}
                >
                    <SwiperSlide>
                        <div className='item'>
                            <InnerImageZoom
                                zoomType="hover" zoomScale={1}
                                src={`https://storage.googleapis.com/mhimg/p/3451/9033451/5715_l.jpg`}
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item'>
                            <InnerImageZoom
                                zoomType="hover" zoomScale={1}
                                src={`https://storage.googleapis.com/mhimg/p/3451/9033451/811d_l.jpg`}
                            />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item'>
                            <InnerImageZoom
                                zoomType="hover" zoomScale={1}
                                src={`https://storage.googleapis.com/mhimg/p/3451/9033451/fab1_l.jpg`}
                            />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>

            <Swiper
                slidesPerView={4}
                slidesPerGroup={1}
                spaceBetween={0}
                navigation={true}
                modules={[Navigation]}
                className="zoomSlider"
                ref={zoomSlider}
            >
                <SwiperSlide>
                    <div className={`item ${slideIndex === 0 && 'item_active'}`}>
                        <img src={`https://storage.googleapis.com/mhimg/p/3451/9033451/811d_l.jpg`} className='w-100' onClick={() => goto(0)} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`item ${slideIndex === 1 && 'item_active'}`}>
                        <img src={`https://storage.googleapis.com/mhimg/p/3451/9033451/5715_l.jpg`} className='w-100' onClick={() => goto(1)} />
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className={`item ${slideIndex === 2 && 'item_active'}`}>
                        <img src={`https://storage.googleapis.com/mhimg/p/3451/9033451/fab1_l.jpg`} className='w-100' onClick={() => goto(2)} />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default ProductZoom;