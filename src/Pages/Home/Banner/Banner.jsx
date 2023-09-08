
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay } from 'swiper';

import slider1 from '../../../assets/banner/slider-1.jpg'
import slider2 from '../../../assets/banner/slider-2.jpg'
import slider3 from '../../../assets/banner/slider-3.jpg'
import slider4 from '../../../assets/banner/slider-4.jpg'
import slider5 from '../../../assets/banner/slider-5.jpg'
import slider6 from '../../../assets/banner/slider-6.jpg'
import slider7 from '../../../assets/banner/slider-7.jpg'
import slider8 from '../../../assets/banner/slider-8.jpg'
import Count from './Count';


const Banner = () => {
    return (
        <div className='pt-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider5} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider6} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider2} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider4} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider1} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider3} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider8} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
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
                    <img className='w-full lg:h-[690px] h-96 brightness-75' src={slider7} alt="" />
                    <h2 className="lg:hidden absolute bottom-44 left-6 text-white text-xl font-bold">Learn The Music From The Masters</h2>
                    <div className="px-32 space-y-4 lg:visible invisible absolute bottom-28 text-white">
                        <h1 className="text-3xl">KAUFMAN MUSIC CENTER PRESENTS</h1>
                        <p className="md:w-2/3">
                            SPECIAL MUSIC SCHOOL HIGH SCHOOL CONCERTO COMPETITION WINNERS’ CONCERT
                            Sunday | June 11, 2023 | 6:30 pm</p>
                        <br />
                        <button className="btn">info & Tickets</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Count></Count>
        </div>
    );
};

export default Banner;