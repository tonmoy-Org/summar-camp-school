import { Link } from 'react-router-dom';
import about2 from '../../../assets/home/about2.png'
import ok from '../../../assets/home/ok.svg'
const Program = () => {
    return (
        <div>
            <div className='md:flex md:items-center gap-12 md:px-32 px-4'>
                <div className='md:mt-36 mt-28'>
                    <h1 className='text-[#D99904] font-bold text-p mb-4'>Best Online Learning Platform</h1>
                    <h1 className='text-5xl font-bold mb-4'>
                        One Platfrom & Many <span>Courses </span> For You
                    </h1>
                    <p className='text-p text-zinc-500 w-4/5 mb-8'>
                        There are many variations of passages of Lorem Ipsum available,
                        but the majority have suffered.
                    </p>
                    <div className='banner-2-description mb-4 '>
                        <div className='flex gap-2 items-center'>
                            <img src={ok} alt="" />
                            <h1 className='font-bold mb-3 pt-2 text-2xl'>9/10 Average Satisfaction Rate</h1>
                        </div>
                        <div className='flex gap-2  items-center'>
                            <img src={ok} alt="" />
                            <h1 className='font-bold mb-3 pt-2 text-2xl'>96% Completitation Rate</h1>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <img src={ok} alt="" />
                            <h1 className='font-bold mb-3 pt-2 text-2xl'>Friendly Environment & Expert Teacher</h1>
                        </div>
                    </div>
                    <button className="mt-10 bg-[#D99904] md:py-4 md:px-8 md:mb-12 mb-8 text-white font-bold py-2 px-5 rounded">
                        <Link to="/allClass">Explore Our Courses</Link>
                    </button>
                </div>
                <div className='mt-20'>
                    <img src={about2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Program;