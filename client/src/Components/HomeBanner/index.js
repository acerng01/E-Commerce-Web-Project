import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomeBanner = () => {

    return (
        <div className="container mt-3">
            <div className="homeBannerSection">
                <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        navigation={true}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://imotorbike.com/my/_next/image/?url=%2Fmy%2F_next%2Fstatic%2Fmedia%2FBig-Bike-Sale-(Oct-2024)-Desktop-Banner-1920x420.6b4cdf40.jpg&w=3840&q=75" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://imotorbike.com/my/_next/image/?url=%2Fmy%2F_next%2Fstatic%2Fmedia%2FWeb-Banner-Dec-2023-1920x420-Generic.a4f24e3b.jpg&w=3840&q=75" className="w-100" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <img src="https://imotorbike.com/my/_next/image/?url=%2Fmy%2F_next%2Fstatic%2Fmedia%2FWeb-Banner-Loan-Options-desktop.b2e1fcc9.jpg&w=3840&q=75" className="w-100" />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default HomeBanner;
