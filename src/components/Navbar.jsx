import { Menu } from "lucide-react";
import { useState } from "react";
import { X } from "lucide-react";
export default function Navbar() {
    const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
    return (
        <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <img 
                                src = "/logo.jpg" 
                                alt="ChanaStuff" 
                                className="w-6 h-6 sm:w-8 sm: h-8"
                            />
                        </div>
                        <span className="test-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Chana</span>
                            <span className="text-blue-300">Stuff</span>
                        </span>
                    </div>

                    {/*Nav Links*/}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            home
                        </a>
                        <a href="#about me" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            about me
                        </a>
                        <a href="#my skills" className="text-gray-300 hover:text-white text-sm lg:text-base">
                            my skills
                        </a>
                    </div>

                    <button 
                        className="md:hidden p-2 text-gray-300 hover:text-white" 
                        onClick={() => setMobileMenuIsOpen((prev) => !prev)}
                    >
                        {mobileMenuIsOpen ? (<X />) : (
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        )}
                            </button>
                </div>
            </div>
            {mobileMenuIsOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
                    <div className="px-4 sm:py-6 space-y-3 sm:space-y-4">
                        <a 
                            href="#home"
                            onClick={() => setMobileMenuIsOpen((false))}
                            className="block text-gray-300 hover:text-white text-sm lg:text-base">
                            home
                        </a>
                        <a 
                            href="#about me"
                            onClick={() => setMobileMenuIsOpen((false))}
                            className="block text-gray-300 hover:text-white text-sm lg:text-base">
                            about me
                        </a>
                        <a 
                            href="#my skills" 
                            onClick={() => setMobileMenuIsOpen((false))}
                            className="block text-gray-300 hover:text-white text-sm lg:text-base">
                            my skills
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}