
const Map = () => {
    
    return (
        <div className='mt-10'>
            <div className='grid justify-center'>
                <h1 className='text-center md:text-5xl text:3xl  font-bold  p-2' >Creating impression worldWide</h1>
            </div>
            <video  width="600" className='w-full ' autoPlay muted loop>
                <source  src={"/image/final_map.mp4"} type="video/mp4" / >
                
            </video>
        </div>
    );
};

export default Map;