import React from "react";
import { FaUser } from "react-icons/fa";
import { motion } from "motion/react";

function Hero() {
  return (
    <section className="relative w-full h-135 flex items-center rounded-3xl justify-around bg-gray-200 px-10">
      {/* Conteúdo */}
      <div className="relative z-10 max-w-2xl flex flex-col gap-4">
        <motion.span 
        initial={{opacity: 0, y: 10}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: 0.5, duration: 1}}
        className="pl-2 p-1 border-b-black rounded-3xl bg-white w-80 flex">
          <p className="flex items-center gap-1">
            {" "}
            <FaUser /> Os melhores preços aqui. Marque Agora
          </p>
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-5xl text-black font-display"
        >
          A <span className="text-[#0057FF]">Sua</span> Melhor{" "}
          <span className="text-[#0057FF]">Experiência</span> Dentária,{" "}
          <span className="text-[#0057FF]">Apenas Aqui</span>
        </motion.h1>
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
          className="text-2xl text-black font-sans"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          veniam praesentium, cumque ducimus eum laborum perferendis?
        </motion.h3>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
          className="bg-[#0057FF] text-center px-3 py-2 rounded-2xl w-48"
        >
          Ver Nossos Serviços
        </motion.a>
      </div>

      {/* Imagem com blob atrás */}
      <motion.div
        className="relative"
        
        initial={{opacity: 0, x: 10}}
        animate={{opacity: 1, x: 0}}
        transition={{delay: 0.5, duraction: 1}}
      >
        {/* Blob azul atrás da imagem */}
        <div
          className="absolute top-15 left-5 w-96 h-72
                bg-[#0055FF] 
                rounded-tl-[150px] rounded-tr-[200px] 
                rounded-bl-[80px] rounded-br-[60px]
                z-0"
        ></div>

        {/* Imagem principal */}
        <img
          src="/hero-img.png"
          className="relative w-auto h-135 object-cover z-10 "
          alt="Clínica Dentária"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
