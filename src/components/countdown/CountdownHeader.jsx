import {motion} from 'framer-motion'

function CountdownHeader() {

    return(

    <motion.div 

    initial = {{opacity:0 ,y:40}}
    whileInView={{opacity:1 ,y:0}}
    transition={{duration:0.8}}    
    viewport={{once: true}}
    className="text-center"
>
    <p className="uppercase tracking-[8px]  text-yellow-600 text-sm" >
        OUR SPECIAL DAY 
    </p>

    <h2 className='mt-4 text-5xl md:text-6xl text-yellow-100 font-mono'>
        COUNTING DOWN 
    </h2>

    <p className='mt-4 text-yellow-400 italic text-lg '>
        Every second brings us closer to forever.
    </p>
        
    </motion.div>

    );

}
export default CountdownHeader;