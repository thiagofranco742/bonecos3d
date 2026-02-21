import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROCESS_STEPS, ASSEMBLY_IMAGES } from '../constants';

const HowItWorks: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            if (!scrollContainer) return;
            
            const firstCard = scrollContainer.firstElementChild as HTMLElement;
            if (!firstCard) return;

            // Calculate scroll amount (card width + gap)
            // Gap is 1rem (16px) from gap-4
            const scrollAmount = firstCard.clientWidth + 16;
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
                // Return to start
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll next
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3000); // 3 seconds interval

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-brand-blue text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Tudo pensado para facilitar sua vida
                    </h2>
                    <p className="text-xl text-white/90 max-w-3xl mx-auto">
                        Simples, rápido e feito com carinho.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {PROCESS_STEPS.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={step.id} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 relative">
                                <div className="bg-white text-brand-blue w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                                    <Icon size={32} strokeWidth={2.5} />
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                <p className="text-white/80 leading-relaxed">
                                    {step.description}
                                </p>
                                
                                {index < PROCESS_STEPS.length - 1 && (
                                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-white/30 z-10">
                                        <ArrowRight size={32} />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>

                {/* Slider Section */}
                <div className="relative">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold">Veja exemplos reais de montagem</h3>
                    </div>
                    
                    <div 
                        ref={scrollRef}
                        className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                    >
                        {ASSEMBLY_IMAGES.map((img, index) => (
                            <div key={index} className="snap-center shrink-0 w-[280px] md:w-[350px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border-4 border-white/20 bg-white">
                                <img 
                                    src={img} 
                                    alt={`Montagem exemplo ${index + 1}`} 
                                    loading="lazy"
                                    width="280"
                                    height="350"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                    
                    <p className="text-center text-white/90 font-medium mt-4 bg-black/10 inline-block px-6 py-2 rounded-full mx-auto w-full md:w-auto">
                        ✨ Todos os moldes vêm com manual passo a passo. Basta seguir as etapas!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;