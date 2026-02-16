import React, { useEffect, useRef } from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const interval = setInterval(() => {
            if (!scrollContainer) return;
            
            const firstCard = scrollContainer.firstElementChild as HTMLElement;
            if (!firstCard) return;

            // Calculate scroll amount (card width + gap)
            // Gap is 1.5rem (24px) from gap-6
            const scrollAmount = firstCard.clientWidth + 24;
            const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;

            if (scrollContainer.scrollLeft >= maxScrollLeft - 10) {
                // Return to start
                scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Scroll next
                scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, 3500); // 3.5 seconds interval

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                        O que dizem os pais? <span className="text-yellow-400">⭐</span>
                    </h2>
                    <p className="text-gray-500">Veja quem já está se divertindo com a família</p>
                </div>

                {/* Container do Carrossel */}
                <div 
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
                >
                    {TESTIMONIALS.map((testimonial) => (
                        <div 
                            key={testimonial.id} 
                            className="snap-center shrink-0 w-[85vw] md:w-[380px] bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow"
                        >
                            {/* Header do Card - Estilo Social */}
                            <div className="flex items-center gap-4 mb-4">
                                <div className="relative">
                                    <img 
                                        src={testimonial.avatar} 
                                        alt={testimonial.name} 
                                        className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div className="absolute -bottom-1 -right-1 bg-brand-green text-white text-[10px] p-1 rounded-full border-2 border-white">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900 text-lg leading-tight">{testimonial.name}</h4>
                                    
                                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-gray-500 mt-1">
                                        <div className="flex text-yellow-400">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star key={i} size={12} fill="currentColor" />
                                            ))}
                                        </div>
                                        <span className="text-gray-300">|</span>
                                        <span>{testimonial.location}</span>
                                    </div>
                                </div>

                                <div className="text-xs text-gray-400 whitespace-nowrap self-start mt-1">
                                    {testimonial.timeAgo}
                                </div>
                            </div>
                            
                            {/* Conteúdo */}
                            <div className="relative">
                                <p className="text-gray-700 leading-relaxed text-[15px]">"{testimonial.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8 text-center">
                    <p className="text-brand-green font-bold text-sm md:text-base bg-brand-green/5 border border-brand-green/20 inline-block px-6 py-2 rounded-full animate-pulse">
                        +22.060 famílias compraram nos últimos meses
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;