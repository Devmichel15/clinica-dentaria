import { FaWhatsapp } from "react-icons/fa"

function Header() {

    return (
        <header className="w-full flex justify-between items-center p-4">
            <div>
                <img src="/public/logo.png" alt="logo"
                    className="w-16 h-14 ml-2"
                />
            </div>

            <nav className="flex gap-3">
                <a href="#" className="text-neutral-800 hover:text-blue-600 cursor-pointer">Sobre Nós</a>
                <a href="#" className="text-neutral-800 hover:text-blue-600 cursor-pointer">Produtos</a>
                <a href="#" className="text-neutral-800 hover:text-blue-600 cursor-pointer">Serviços</a>
                <a href="#" className="text-neutral-800 hover:text-blue-600 cursor-pointer">Contacto</a>
            </nav>
            <div className="flex gap-3 items-center">
                <a href="#" className="bg-[#0055FF] text-white rounded-2xl px-4 py-2 flex items-center justify-between">Conecte-se</a>
            </div>
        </header>
    );
}

export default Header;