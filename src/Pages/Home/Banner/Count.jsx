import CountUp from 'react-countup';

const Count = () => {
    return (
        <div className='flex justify-end lg:me-28 lg:mb-32 mb-60 text-center'>
            <div className='lg:flex justify-center absolute z-10 lg:-translate-y-16 -translate-y-28 pe-6'>
                <div className='bg-[#F6ECE9] py-4 lg:py-8'>
                    <CountUp
                        end={952}
                        duration={2.75}
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold' // Add this line
                        }}
                    >
                    </CountUp>
                    <p className='w-4/5 mx-auto'>Student Already Being
                        Professional</p>
                </div>
                <div className='bg-[#F6ECE9] py-4 lg:py-8'>
                    <CountUp
                        end={1120}
                        duration={2.75}
                        style={{
                            fontSize: '30px',
                            fontWeight: 'bold' // Add this line
                        }}
                    >
                    </CountUp>
                    <p className='w-4/5 mx-auto'>Show & Concert Has Been Held By Student</p>
                </div>
            </div>
        </div>
    );
};

export default Count;