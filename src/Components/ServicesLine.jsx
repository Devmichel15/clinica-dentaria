import { FaTooth } from "react-icons/fa";

function ServicesLine() {
  return (
    <div className="w-full p-2 bg-[#0055FF] flex justify-center gap-4 mt-8 text-white">
      <FaTooth className="text-white text-2xl" />
      <span className="flex items-center">Consultas odontológicas</span>
      <span className="flex items-center">Limpeza dentária</span>
      <span className="flex items-center">Tratamento de cáries</span>
      <span className="flex items-center">Branqueamento dentário</span>
      <span className="flex items-center">Aparelho dentário</span>
      <span className="flex items-center">Tratamento de canal</span>
      <span className="flex items-center">Extrações</span>
      <span className="flex items-center">Implantes dentários</span>
      <FaTooth className="text-white text-2xl" />
    </div>
  );
}

export default ServicesLine;
