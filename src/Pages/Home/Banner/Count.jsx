import CountUp from 'react-countup';

const Count = () => {
    return (
        <div>
            <div className='flex justify-end lg:me-28 lg:mb-32 text-center'>
                <div className='lg:flex justify-center absolute z-[1] lg:-translate-y-16 -translate-y-28 pe-11'>
                    <div className='bg-[#F6ECE9] py-4 lg:py-8' data-aos="fade-up"
                        data-aos-duration="1000">
                        <CountUp
                            end={952}
                            duration={2.75}
                            style={{
                                fontSize: '30px',
                                fontWeight: 'bold' // Add this line
                            }}
                        >
                        </CountUp>
                        <span className='text-3xl'>+</span>
                        <p className='w-4/5 mx-auto'>Student Already Being
                            Professional</p>
                    </div>
                    <div className='bg-[#F6ECE9] py-4 lg:py-8' data-aos="fade-up"
                        data-aos-duration="1000">
                        <CountUp
                            end={1120}
                            duration={2.75}
                            style={{
                                fontSize: '30px',
                                fontWeight: 'bold' // Add this line
                            }}
                        >
                        </CountUp>
                        <span className='text-3xl'>+</span>
                        <p className='w-4/5 mx-auto'>Show & Concert Has Been Held By Student</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Count;