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
    <p className="font-bold font-merienda  uppercase tracking-[8px]  text-yellow-600 text-sm" >
        OUR SPECIAL DAY 
    </p>

    <h2 className='eagle-lake-regular mt-4 text-5xl md:text-6xl text-yellow-100 font-mono'>
        COUNTING DOWN 
    </h2>

    <p className="font-Tangerine text-3xl mt-10 text-yellow-400  ">
        Every second brings us closer to forever.
    </p>
        
    </motion.div>

    );

}
export default CountdownHeader;