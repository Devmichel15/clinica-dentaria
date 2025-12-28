import { CiCircleCheck } from "react-icons/ci";
import { MdExpandMore } from "react-icons/md";

function About() {
  return (
    <section className="flex flex-col items-center gap-6 w-full bg-white mt-6 rounded-2xl h-135 p-4">
      <h3 className="text-3xl text-neutral-700">Sobre Nós</h3>
      <div className="flex justify-around w-full h-full mt-10 gap-10">
        <div className="flex relative">
          <span className="bg-[#0055FF] w-14 absolute top-10 -left-20 h-2 rounded-4xl rotate-45"></span>
          <span className="bg-[#0055FF] w-14 absolute top-10 left-60 h-2 rounded-4xl rotate-45"></span>
          <span className="bg-[#0055FF] w-14 absolute top-60 -right-20 z-10 h-2 rounded-4xl rotate-45"></span>
          <span className="bg-[#0055FF] w-14 absolute top-60 right-40 h-2 rounded-4xl rotate-45"></span>
          

          <img
            src="/public/about-img.jpg"
            className="w-52 h-52 rounded-2xl object-cover object-center"
            alt=""
          />
          <img
            src="/public/about1.jpg"
            className="w-52 h-52 rounded-2xl object-cover object-center absolute top-35 left-40"
            alt=""
          />
        </div>

        <div className="max-w-135 flex flex-col text-start gap-6">
          <h2 className="text-5xl">
            <span className="text-[#0055FF]">
              15 Anos De Experiência, <br></br>
            </span>
            Na Área De Odontologia
          </h2>
          <p className="text-neutral-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            consequuntur rerum amet quibusdam assumenda impedit cupiditate illo
            ratione illum ipsa?
          </p>
          <ul>
            <li className="mb-2 p-2 bg-gray-200 rounded-full flex"> <CiCircleCheck fontSize={25} className="bg-[#0055FF] text-white rounded-full mr-3" /> Tratando o emocional dos clientes</li>
            <li className="mb-2 p-2 bg-gray-200 rounded-full flex"> <CiCircleCheck fontSize={25} className="bg-[#0055FF] text-white rounded-full mr-3" /> Renovando o auto-estima dos clientes</li>
            <li className="mb-2 p-2 bg-gray-200 rounded-full flex"> <CiCircleCheck fontSize={25} className="bg-[#0055FF] text-white rounded-full mr-3" /> Trazendo de volta a alegria</li>
          </ul>

          <a href="#" className="bg-[#0055FF] p-1 pl-2 rounded-lg text-center w-24 flex items-center">
            Ver mais <MdExpandMore />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
