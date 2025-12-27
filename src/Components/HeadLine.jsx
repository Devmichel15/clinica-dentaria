import { FaPhone, FaLocationArrow, FaEnvelope } from "react-icons/fa"

function HeadLine () {

    return(
        <span className="w-full p-2 bg-[#0055FF] flex justify-center gap-10">
            <a href="#" className="flex gap-2 items-center hover:bg-white transition-all duraction-300 ease-in-out p-1 rounded-lg">
                <FaPhone /> (244) 920 XXX XXX
            </a>
            <a href="#" className="flex gap-2 items-center hover:bg-white transition-all duraction-300 ease-in-out p-1 rounded-lg">
                <FaLocationArrow /> Morro Bento, Rua V
            </a>
            
            <a href="#" className="flex gap-2 items-center hover:bg-white transition-all duraction-300 ease-in-out p-1 rounded-lg">
                <FaEnvelope /> clinicasorriso@gmail.com
            </a>
            
        </span>
    )
}

export default HeadLine;