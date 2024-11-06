import HomeBanner from "../../Components/HomeBanner";
import banner1 from '../../assets/images/banner1.jpg';
import Button from '@mui/material/Button';
import { FaArrowRightLong } from "react-icons/fa6";
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductItem from "../../Components/ProductItem";
import HomeCate from "../../Components/HomeCate";
import banner3 from '../../assets/images/banner3.png';
import banner4 from '../../assets/images/banner4.png';
import { MdMailOutline } from "react-icons/md";

const Home = () => {

    var productSliderOptions = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    return (
        <>
            <HomeBanner />

            <HomeCate/>

            <section className="homeProducts">
                <div className="contenier">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="sticky">
                                <div className="banner">
                                    <img src={banner1} className="cursor" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-ligt text-sml mb-0">Do not miss the current offer!!!</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All <FaArrowRightLong /> </Button>
                            </div>

                            <div className="product_row w-100 mt-2">
                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                   
                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <ProductItem/>
                                    </SwiperSlide>
                                   
                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center mt-4">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-ligt text-sml mb-0">New products with updated stocks.</p>
                                </div>

                                <Button className="viewAllBtn ml-auto">View All <FaArrowRightLong /> </Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>
                                <ProductItem/>

                            </div>

                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner3} className="cursor w-100" />
                                </div>

                                <div className="banner">
                                    <img src={banner4} className="cursor w-100" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white mb-1">$20 discount for your first order</p>
                            <h4 className="text-white">Join our newsletter and get...</h4>
                            <p className="text-ligt">Join our email subscription now to get updates on<br/> promotions and coupons</p>

                            <form>
                                <MdMailOutline/>
                                <input type="text" placeholder="Your Email"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>

                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;