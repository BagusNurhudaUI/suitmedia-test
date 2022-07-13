

const Values = () => {
    return (
        <div className="p-12 mx-12 m-auto">
            <div>
                <h1 className='text-2xl uppercase font-bold pb-8'>Our Values</h1>
            </div>
            <div className="flex flex-row gap-4 justify-center">
                <div>
                    <div className='bg-red-400 px-8 justify-center'>
                        <img src={require('../img/lightbulb-o.png')} alt="inovative" className='w-3 m-auto pt-6'/>  
                        <div className='text-white pt-2 font-bold'>INNOVATIVE</div>  
                        <div className='text-white pt-4 py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                </div>
                <div>
                    <div className='bg-emerald-600 px-8 justify-center'>
                        <img src={require('../img/lightbulb-o.png')} alt="inovative" className='w-3 m-auto pt-6'/>  
                        <div className='text-white pt-2 font-bold'>LOYALTY</div>  
                        <div className='text-white pt-4 py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                </div>
                <div>
                    <div className='bg-cyan-700 px-8 justify-center'>
                        <img src={require('../img/lightbulb-o.png')} alt="inovative" className='w-3 m-auto pt-6'/>  
                        <div className='text-white pt-2 font-bold'>RESPECT</div>  
                        <div className='text-white pt-4 py-8'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Values;