import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import slider1 from '../../../assets/banner/slider-1.jpg'
import slider2 from '../../../assets/banner/slider-2.jpg'
import slider3 from '../../../assets/banner/slider-3.jpg'

const Banner = () => {
    return (
        <div>
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className="brightness-75" src={slider1} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28 text-white">
                        <h1 className="text-3xl">KAUFMAN MUSIC CENTER PRESENTS</h1>
                        <p className="md:w-2/3">
                            SPECIAL MUSIC SCHOOL HIGH SCHOOL CONCERTO COMPETITION WINNERS’ CONCERT
                            Sunday | June 11, 2023 | 6:30 pm</p>
                        <br />
                        <button className="btn">info & Tickets</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="brightness-75" src={slider2} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28 text-white">
                        <h1 className="text-3xl">KAUFMAN MUSIC CENTER PRESENTS</h1>
                        <p className="md:w-2/3">
                            TERRA STRING QUARTET
                            Tuesday | October 3, 2023 | 2 pm</p>
                        <br />
                        <button className="btn">info & Tickets</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="brightness-75" src={slider3} alt="" />
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28 text-white">
                        <h1 className="text-3xl">KAUFMAN MUSIC CENTER PRESENTS</h1>
                        <p className="md:w-2/3">
                            NADIA AND LILI BOULANGER & THE BOULANGERIE
                            Monday | December 11, 2023 | 7:30 pm</p>
                        <br />
                        <button className="btn">info & Tickets</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;