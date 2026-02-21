import React from 'react';
import Button from './Button';
import { ChevronDown, Star } from 'lucide-react';

const Hero: React.FC = () => {
    const scrollToGallery = () => {
        const gallerySection = document.getElementById('gallery');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-8 pb-16 px-4 md:pt-16 md:pb-24 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm border border-brand-blue/20">
                    <div className="flex text-brand-yellow">
                        {[1, 2, 3, 4, 5].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-700">+1200 Arquivos Aprovados</span>
                </div>

                <h1 className="text-[1.6rem] leading-[1.12] md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-8">
                    Monte Moldes 3D Incríveis
                    <br />
                    <span className="text-xl md:text-3xl font-medium text-gray-600 block mt-2">Feitos de papel</span>
                </h1>

                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white mb-8">
                    <img 
                        src="https://media.atomicatpages.net/u/jkXVp80niLVY7exUbTx8s7SZirl2/Pictures/share/page2MlLdnZ/KvEmjm8361205.png?quality=84" 
                        alt="Crianças brincando com moldes de papel" 
                        width="800"
                        height="450"
                        className="w-full h-auto object-cover"
                        loading="eager"
                        fetchPriority="high"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
                    
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-brand-yellow text-gray-900 px-4 py-2 rounded-full font-bold text-sm md:text-base shadow-lg border-2 border-white flex items-center gap-2 whitespace-nowrap z-20">
                        <span>🖨️</span> Moldes no ponto de imprimir
                    </div>
                </div>
                
                <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                    Mesmo sem experiência: você só vai precisar de uma cola e tesoura
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                    <Button onClick={scrollToGallery} variant="primary" className="w-full sm:w-auto text-xl px-10 py-5">
                        Quero Comerçar Agora!
                    </Button>
                    <span className="text-sm text-gray-500 font-medium mt-2 sm:mt-0">
                        Acesso Imediato + Garantia de 7 Dias ❤️
                    </span>
                </div>
            </div>
            
            {/* Background decorations */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-brand-blue/10 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-40 right-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-xl animate-pulse delay-700"></div>
        </section>
    );
};

export default Hero;