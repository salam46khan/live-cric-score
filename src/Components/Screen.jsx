import ban from '../assets/Bangladesh_Cricket_Board_Logo.svg.png'
import pak from '../assets/Pakistan_cricket_team_logo.png'
import sri from '../assets/984_srilanka_cricket.jpg'
import afr from '../assets/Southafrica_cricket_logo.svg.png'
const Screen = () => {
    return (
        <div className="w-full h-[620px] bg-gradient-to-r from-lime-400 to-blue-500 relative overflow-hidden">
            <div className='flex justify-center z-0 w-full h-full absolute top-0 left-0 border'>
                <img src={ban} className='w-[600px] -translate-x-1/3  opacity-30' alt="" />
                <img src={afr} className='w-[600px] translate-x-1/3  opacity-30' alt="" />

            </div>

            <div className="text-center z-40 h-full w-full bg-[#000a] p-10  text-white ">
                <h2 className='text-5xl uppercase font-extrabold'>Borishal Kings <span className='text-cyan-200'>V/s</span> Rangpur Riders</h2>
                <p className='text-2xl'>(Bangladesh premear leaugh)</p>
                <div>
                    <h1 className='text-[120px] font-extrabold'><span className='text-lime-300'>100</span>/<span className='text-red-400 leading-3'>3</span></h1>
                    <p className='text-2xl'>Over: <span>7.4</span></p>
                </div>
                <div className='flex justify-between mt-8 gap-6 text-black'>
                    <div className='bg-slate-200 p-5 w-1/3 rounded-lg drop-shadow-lg shadow-black'>
                        <img className='h-20 w-20 rounded-full mx-auto' src={sri} alt="" />
                        <h4 className='text-3xl py-4 font-bold'>Tamim Iqbal</h4>
                        <div className='flex justify-between'>
                            <h5 className='text-2xl font-semibold'>Run: 45<span className='text-lg font-normal'>(40)</span></h5>
                            <p className='text-2xl'>S/R: 90</p>
                        </div>
                    </div>
                    <div className='bg-slate-200 p-5 w-1/3 rounded-lg drop-shadow-lg shadow-black'>
                        <img className='h-20 w-20 rounded-full mx-auto' src={sri} alt="" />
                        <h4 className='text-3xl py-4 font-bold'>Tamim Iqbal</h4>
                        <div className='flex justify-between'>
                            <h5 className='text-2xl font-semibold'>Run: 45<span className='text-lg font-normal'>(40)</span></h5>
                            <p className='text-2xl'>S/R: 90</p>
                        </div>
                    </div>
                    <div className='bg-slate-200 p-5 w-1/3 rounded-lg drop-shadow-lg shadow-black'>
                        <img className='h-20 w-20 rounded-full mx-auto' src={sri} alt="" />
                        <h4 className='text-3xl py-4 font-bold'>Tamim Iqbal</h4>
                        <div className='flex justify-between'>
                            <h5 className='text-2xl font-semibold'>Run: 45<span className='text-lg font-normal'>(40)</span></h5>
                            <p className='text-2xl'>S/R: 90</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Screen;