
const Journy= () => {
    
    return (
        <div className=''>
            <div className='grid justify-center'>
                <h1 className='text-center text-xl md:text-5xl font-bold py-10' >Our Journy</h1>
            </div>
            <video  width="600" className='w-full ' autoPlay muted loop>
                <source  src={"/image/OurJourny.mp4"} type="video/mp4" / >
                
            </video>
        </div>
    );
};

export default Journy;