import { use, useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { codeExamples } from '../data/CodeExamples';
import { floatingCards } from '../data/CodeExamples';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Sparkles } from 'lucide-react';
import SpotifyCard from '../components/SpotifyCard';

export default function Hero() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [activeTab, setActiveTab] = useState('Code');

    useEffect(() => {
        function handleMouseMove(e) {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const currentFloatingCard = floatingCards[activeTab];
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    background: `radial-gradient(600px circle at $  {mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
                }}
            />
            <div className="absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="max-w-7xl mx-auto text-center relative w-full">
                <div className="max-w-7xl max-auto flex flex-col lg:grid lg:grid-cols-2 text-center gap-6 sm:gap-8 lg:gap-12 items-center relative">
                    <div>
                        <div className='inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700'>
                            <Sparkles className="w-4 h-4 text-blue-400" />
                            <span className="text-xs sm:text-sm text-blue-300">
                                Be curious. Be patient. Be kind.
                            </span>
                        </div>
                        <h1 className="lg:text-left text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight">
                            <span className="bg-gradient-to-r from-white via-blue-300 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                                Hello, I'm
                            </span>
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2">
                                William Chandra
                            </span>
                            {/*<span className="bg-gradient-to-r from-white via-blue-300 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2">
                                Chandra
                            </span>*/}
                        </h1>
                        <p className="text-md sm:text-base lg:text-lg text-gray-400 ma-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relax">
                            I'm a Computer Science graduate with an interest in building things with others. I'm currently exploring new opportunites that align with my background in Computer Science and Data Science.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in-from-bottom duration-700 delay-300">
                            <button
                                onClick={() => window.open("https://www.linkedin.com/in/william-a-chandra/", "_blank", "noreferrer")}
                                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2">
                                <span>
                                    LinkedIn
                                </span>
                            </button>

                            <button
                                onClick={() => window.open("https://github.com/WChana", "_blank", "noreferrer")}
                                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                                <div>
                                    GitHub
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="relative order-2 w-full">
                        <div className="relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10">
                            <div className="bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[400px] sm:h-[450px] lg:h-[550px] border border-white/5">
                                {/* Main Heading */}
                                <div className="flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10">
                                    <div className="flex items-center space-x-2">
                                        <div className="flex items-center space-x-1 sm:space-x-2 ">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500" />
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500" />
                                        </div>
                                        <span className="text-xs sm:text-sm text-gray-300">
                                            ChanaStuff
                                        </span>
                                    </div>
                                    <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                </div>

                                <div className="p-3 sm:p-4 relative h-full">
                                    {/* file tabs */}
                                    <div className="flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto">
                                        <button
                                            onClick={() => setActiveTab("Code")}
                                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Code"
                                                ? "bg-blue-500/30 text-white border-blue-400"
                                                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                                } transition-all duration-200 whitespace-nowrap`}
                                        >
                                            Code
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("Art")}
                                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Art"
                                                ? "bg-purple-500/30 text-white border-purple-400"
                                                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                                } transition-all duration-200 whitespace-nowrap`}
                                        >
                                            Art
                                        </button>
                                        <button
                                            onClick={() => setActiveTab("Music")}
                                            className={`px-3 py-2 backdrop-blur-sm text-xs sm:text-sm rounded-t-lg border ${activeTab === "Music"
                                                ? "bg-green-500/30 text-white border-green-400"
                                                : "bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"
                                                } transition-all duration-200 whitespace-nowrap`}
                                        >
                                            Music
                                        </button>
                                    </div>

                                    {/* code display area */}
                                    
                                    <div className="relative overflow-hidden flex-grow h-full">
                                        {activeTab === "Music" ? (
                                            /* MUSIC TAB LAYOUT */
                                            <div className="flex flex-col space-y-4">
                                                {/* 1. The Text Description from your codeExamples file */}
                                                <div>
                                                <SyntaxHighlighter
                                                language="javascript"
                                                style={nightOwl}
                                                customStyle={{
                                                    margin: 0,
                                                    borderRadius: "8px",
                                                    fontSize: "11px",
                                                    lineHeight: "1.4",
                                                    height: "100%",
                                                    border: "1px solid #3c3c3c",
                                                }}
                                            >
                                                {codeExamples["Music"]}
                                            
                                                
                                            </SyntaxHighlighter>
                                            </div>
                                            <div className="flex-grow flex items-center justify-center w-full px-4 sm:px-8">
                                                <p className="text-slate-400">What I'm currently listening to:</p>
                                                
                                            </div>
                                            <div className="flex-grow flex items-center justify-center w-full px-4 sm:px-8">
                                                
                                                <SpotifyCard />
                                            </div>
                                            </div>
                                            
                                        ) : (
                                            /* CODE & ART TABS (Original Syntax Highlighter) */
                                            <div>
                                            <SyntaxHighlighter
                                                language="javascript"
                                                style={nightOwl}
                                                customStyle={{
                                                    margin: 0,
                                                    borderRadius: "8px",
                                                    fontSize: "11px",
                                                    lineHeight: "1.4",
                                                    height: "100%",
                                                    border: "1px solid #3c3c3c",
                                                }}
                                            >
                                                {codeExamples[activeTab]}
                                            </SyntaxHighlighter>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            {/* floating cards */}
                            <div className={`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${currentFloatingCard.bgColor} backdrop-blur-xl rounded-lg p-4 border-white/20 shadow-2xl`}>
                                <div className='flex items-center space-x-2 mb-2'>
                                    <div className={`w-6 h-6 ${currentFloatingCard.iconColor} flex items-center justify-center text-sm font-bold`}>
                                        {currentFloatingCard.icon}
                                    </div>
                                    <span className={`text-sm font-medium ${currentFloatingCard.textColor}`}>
                                        {currentFloatingCard.title}
                                    </span>
                                </div>
                                <div className={`text-sm text-left ${currentFloatingCard.contentColor}`}>
                                    {currentFloatingCard.content}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}